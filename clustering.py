from fileUtil import getPresentSeeds
from util import getSeedsPositions
from stringUtil import commonprefix
#check if elements are close to each other
#TODO comeup with pretty good definition of cluster
def closeTo((s1, e1), valueList):
    for (s2, e2) in valueList:
        if abs(s1-s2)<=3000:
            return True
    return False


def numberOfClusters(seedsPositionsOnPage):
    totalCount = 0
    for i in range(0, len(seedsPositionsOnPage)):
        countEachSeed=0
        l1 = seedsPositionsOnPage[i]
        for j in range (i+1, len(seedsPositionsOnPage)):
            l2 = seedsPositionsOnPage[j]
            for value in l1:
                if closeTo(value, l2):
                    countEachSeed+=1
                    break
        totalCount+=countEachSeed
    return totalCount
        


    
#find string representation of clusters present in htmlPageContent    
def getStrOfCluster(clusters, htmlPageContent):
    output = []
    for cluster in clusters:
        clusterOutput = []
        for (start, end) in cluster:
            clusterOutput.append(htmlPageContent[start:end].strip())
        output.append(clusterOutput)
    return output



#try adding seed positions related to one seed into each cluster
def addSeedLocationToClusters(clusters, seedsPositionOnPage):
    if len(clusters) == 0:
        for seedPosition in seedsPositionOnPage:
            clusters.append([seedPosition])
        return clusters
    for seedPosition in seedsPositionOnPage:
        for cluster in clusters:
            if closeTo(seedPosition, cluster):
                cluster.append(seedPosition)
    return clusters

    
#try adding each seed location in cluster and expanding each cluster
def getClusters(htmlPageContent, seeds):
    presentSeeds = getPresentSeeds(htmlPageContent, seeds)
    clusters = []
    seedsPositionsOnPage = getSeedsPositions(htmlPageContent, presentSeeds)
    for eachSeedPositions in seedsPositionsOnPage:
        #print("Cluster is " + str(clusters))
        addSeedLocationToClusters(clusters, eachSeedPositions)
    return clusters




#get the prefix of clusters present and return them as output
def getClusterPrefix(clusters):
    output = []
    for cluster in clusters:
        output.append(commonprefix(cluster))        
    return output



#print the clusters present
def printCluster(cluster):
    for item in cluster:
        print(item)
        print("-----------------")    






    
    
