#all the imports for the project
import re
from clustering import getClusters, numberOfClusters, getStrOfCluster, getClusterPrefix
from util import *
from fileUtil import getPresentSeeds
from stringUtil import getLeftContexts, getRightContexts
#Pattern is (l, r) and match them to htmlPageContent
def findEntitySetwrtPattern(htmlPageContent, (l, r)):
    #for each start location of pattern find its end
    #for each end page find the pattern right
    #extract everything till that point
    #after extraction move one point above that pattern string
    results = []
    for m in re.finditer(re.escape(l), htmlPageContent):
        start = m.start()
        end = m.end()
        rightPage = htmlPageContent[end:]
        rightLoc  = rightPage.find(r)
        if rightLoc==-1:
            break
        element = rightPage[:rightLoc-1]
        if len(element)>1 and len(element)<100:
            results.append(element)
    return set(results)



#input: all the pattern found and new html page
#output: extract set of elements from the page that are in our set(whose definition we know)
def extractSet(patterns, htmlPageContent):
    output = []
    for pattern in patterns:
        output.extend(findEntitySetwrtPattern(htmlPageContent, pattern))
    return output


#return only those patterns whose length is atleast 10
def clubPatterns(leftPatterns, rightPatterns):
    l1 = len(leftPatterns)
    l2 = len(rightPatterns)
    if l1 != l2:
        return []
    output = []
    for index in range(0, l1):
        l = leftPatterns[index]
        r = rightPatterns[index]
        if len(l)>10 and len(r)>10:
            output.append((l, r))
    return output





#get all the patterns that are present in html page w.r.t one seedSet
def getPatterns(pageContent, seedsSet):
    clusters = getClusters(pageContent, seedsSet)
#     print("clusters are: " + str(clusters))
    strClusters = getStrOfCluster(clusters, pageContent)
#     print("Str clusters are " + str(strClusters))
    leftContexts  = getLeftContexts(clusters, pageContent)
    rightContexts = getRightContexts(clusters, pageContent)
    leftPrefixes  = reverseListElements(getClusterPrefix(leftContexts))
    rightPrefixes = getClusterPrefix(rightContexts)
    return clubPatterns(leftPrefixes, rightPrefixes)


#try removing anything except class="value" FLIPKART troubled us to write this pattern processing
def deleteEveryValueExceptClass(s):
    index = 0
    output = ""
    KEEP_REMOVING = 0
    KEEP_TAKING = 1
    KEEP_TAKING_TWICE=2
    status=KEEP_TAKING
    index=0
    while index<len(s):
        ch = s[index]
        if ch=="\"":
            if status==KEEP_REMOVING:
                index+=1
                status = KEEP_TAKING
            elif status==KEEP_TAKING:
                status = KEEP_REMOVING
                index+=1
            elif status==KEEP_TAKING_TWICE:
                output+=ch
                status=KEEP_TAKING
                index+=1
        elif status==KEEP_REMOVING:
            index+=1
        elif s[index:].startswith("class=\""):
            output+="class=\""
            index+=7
            status=KEEP_TAKING_TWICE
        else:
            output+=ch+""
            index+=1
    return output        


#check if page is potential candidate for pattern extraction
def isPageReady(htmlPageContent, seeds):
    presentSeeds = getPresentSeeds(htmlPageContent, seeds)
    if len(presentSeeds)<2:
        return False
#     print("Seeds are ")
#     print(presentSeeds)
    seedsPositionsOnPage = getSeedsPositions(htmlPageContent, presentSeeds)
#     print("Seeds positions are " + str(seedsPositionsOnPage))
#     print("Number of positions " + str(len(seedsPositionsOnPage)))
    if numberOfClusters(seedsPositionsOnPage)<=0:
        return False
    return True




