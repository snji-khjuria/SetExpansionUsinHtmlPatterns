#conversion of tuple to single row with particular parameter
def convertTupleToRow(l, separator="\t"):
    output = []
    for (i1, i2) in l:
        output.append(i1 + separator + i2)
    return output

#remove elements which were actually tag
def isTag(s):
    if s.find("<")!=-1 and s.find(">")!=-1:
        return True
    return False


#preprocess results before writing it to file
def preprocessResults(output):
    result = []
    for o in output:
        if isTag(o):
            continue
        result.append(o)
    return result


#reverse strings in list
def reverseListElements(l):
    output = []
    for item in l:
        output.append(item[::-1])
    return output




#find all start, end pairs of particular key
def getAllStartEndPairs(document, key):
    keyLength = len(key)
    return [(i, i+keyLength) for i in range(len(document)) if document.startswith(key, i)]
 
    
#find seeds for one particular seed(at this stage call only getAllStartEndPairs())
def getEachSeedLocationsInPage(htmlPageContent, seed):
    return getAllStartEndPairs(htmlPageContent, seed)

        
#find all seed positions that were present in htmlPage
def getSeedsPositions(htmlPageContent, presentSeeds):
    output = []
    for seed in presentSeeds:
        output.append(getEachSeedLocationsInPage(htmlPageContent, seed))
    return output


