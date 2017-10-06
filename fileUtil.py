#all the imports for the project
from os import listdir
from os.path import isfile, join
import re
import os
from util import *


#give it the name of directory and get back list of files present in directory
def getAllFilesInDirectory(directory):
    return [join(directory, f) for f in listdir(directory) if isfile(join(directory, f))]


#get fileName,list and outputdirectory and write list onto file
def writeOutputToFile(fileName, results, outputSeedsLocation):
    with open(outputSeedsLocation + "/" + fileName,'w') as f:
        f.write('\n'.join(results))

                
#read the page from pageLocation
def readPage(pageLocation):
    htmlPageContent = ""
    with open(pageLocation, 'r') as myfile:
        htmlPageContent = myfile.read().strip()
    return htmlPageContent


#document processing logic at this stage is about removing multiple whitespaces into single one 
def preprocessDocument(document):
    return ' '.join(document.split())


#create direcotries if not present already
def mkDirsInResults(outputSeedsLocation, seedsDirectory, patternsDirectory, unseenDataSeedsDirectory):
    if not os.path.exists(outputSeedsLocation):
        os.makedirs(outputSeedsLocation)
    if not os.path.exists(seedsDirectory):
        os.makedirs(seedsDirectory)
    if not os.path.exists(patternsDirectory):
        os.makedirs(patternsDirectory)
    if not os.path.exists(unseenDataSeedsDirectory):
        os.makedirs(unseenDataSeedsDirectory)
        
        
        
#get seeds as set after reading from seedsLocation
def getSeeds(seedsLocation):
    lines = []
    with open(seedsLocation) as f:
        for line in f:
            lines.append(line.strip())
    return set(lines)


#get list of present seeds from content of html page
def getPresentSeeds(htmlContent, seeds):
    results = []
    for seed in seeds:
        if htmlContent.find(seed)==-1:
            continue
        results.append(seed)
    return results


#preprocessing the seeds so that if seeds need to be modified
#Next stages: Not exact match of seed
def preprocessSeeds(seeds):
    l = []
    for s in seeds:
        l.append(s.strip())
    return set(l)





