#all the imports for the project
from os import listdir
from os.path import isfile, join
import re
import os
import sys
from fileUtil import *
from patternsUtil import isPageReady, getPatterns, extractSet
##get user input



if len(sys.argv)==6:
    seedsLocation         = sys.argv[1]
    outputSeedsLocation   = sys.argv[2]
    corpusLocation        = sys.argv[3]
    unseenCorpusLocation  = sys.argv[4]
    iterations            = int(sys.argv[5])
else:
    seedsLocation         = raw_input("Enter seeds location: ")
    outputSeedsLocation   = raw_input("Enter output/results location: ")
    corpusLocation        = raw_input("Enter corpus location out of which you want t lear patterns: ")
    unseenCorpusLocation  = raw_input("Enter unseen corpus location on which you want to apply patterns: ")
    iterations            = int(raw_input("Enter number of iterations: "))


corpusFiles           = getAllFilesInDirectory(corpusLocation)
unseenCorpusFiles     = getAllFilesInDirectory(unseenCorpusLocation)
print("seeds location is " + str(seedsLocation))
print("Output results(next seeds) Location is " + str(outputSeedsLocation))
print("corpus location is " + str(corpusLocation))
print("Number of iterations: " + str(iterations))
print("Number of files in seeds corpus: " + str(len(corpusFiles))) 
print("Unseen corpus Location is: " + str(unseenCorpusLocation))
print("Number of files in unseen corpus location is " + str(len(unseenCorpusFiles)))


##directory construction
seedsDirectory = outputSeedsLocation +"/iterationSeeds"
patternsDirectory = outputSeedsLocation +"/patterns"
unseenDataSeedsDirectory = outputSeedsLocation + "/unseenDataSeeds"                   
mkDirsInResults(outputSeedsLocation, seedsDirectory, patternsDirectory, unseenDataSeedsDirectory)


##start executing pattern extraction pipeline for all the iterations
seedsSet = getSeeds(seedsLocation)
results = []
patternsFound = []
for iteration in range(1, iterations+1):
    print("Iteration# " + str(iteration))
    for productPage in corpusFiles:
        pageContent = preprocessDocument(readPage(productPage))
        pageStatus = isPageReady(pageContent, seedsSet)
        patterns = getPatterns(pageContent, seedsSet)
        if pageStatus==True:
            patternsFoundEachPage = getPatterns(pageContent, seedsSet)
            if len(patternsFoundEachPage)<=0:
                pageContent = deleteEveryValueExceptClass(pageContent)
                if isPageReady(pageContent, seedsSet):
                    patternsFoundEachPage = getPatterns(pageContent, seedsSet)
                else:
                    continue
            moreSetElements = preprocessResults(list(extractSet(patternsFoundEachPage, pageContent)))
            results.extend(moreSetElements)
            patternsFound.extend(patternsFoundEachPage)

    results2 = set(results)
    results2 = list(results2)
    writeOutputToFile("results_"+str(iteration), results2, seedsDirectory)
    print("Seen Results written at location: " + seedsDirectory + " for iteration " + str(iteration))
            
unseenResults = []
for productPage in unseenCorpusFiles:
    pageContent = preprocessDocument(readPage(productPage))
    resultsPerPage = preprocessResults(list(extractSet(patternsFound, pageContent)))
    if len(resultsPerPage)<=0:
        pageContent = deleteEveryValueExceptClass(pageContent)
        resultsPerPage = preprocessResults(list(extractSet(patternsFound, pageContent)))
    unseenResults.extend(resultsPerPage)
unseenResults = list(set(unseenResults))
print("Total number of unseen results: " + str(len(unseenResults)))
writeOutputToFile("unseenSeeds", unseenResults, unseenDataSeedsDirectory)
print("unseen seeds written at " + unseenDataSeedsDirectory)
#patternsFound = [("Left patterns", "Right Patterns")].extend(patternsFound)
patternsFound.insert(0, ("Left Patterns", "Right Patterns"))
writeOutputToFile("patterns.tsv", convertTupleToRow(patternsFound), patternsDirectory)
print("Patterns written at location " + patternsDirectory)
