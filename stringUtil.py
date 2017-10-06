#get left contexts of elements in cluster
def getLeftContexts(clusters, htmlPageContent):
    output = []
    for cluster in clusters:
        clusterOutput = []
        for (start, end) in cluster:
            lc = htmlPageContent[(max(0, start-100)):start].strip()
            if len(lc)<=0:
                continue
            clusterOutput.append(lc[::-1])
        output.append(clusterOutput)
    return output
    

#get right contexts for each cluster    
def getRightContexts(clusters, htmlPageContent):
    output = []
    for cluster in clusters:
        clusterOutput = []
        for (start, end) in cluster:
            rc = htmlPageContent[end+1:min(len(htmlPageContent), end+100)].strip()
            if len(rc)<=0:
                continue
            clusterOutput.append(rc)
        output.append(clusterOutput)
    return output




def commonprefix(m):
    "Given a list of pathnames, returns the longest common leading component"
    if not m: return ''
    s1 = min(m)
    s2 = max(m)
    for i, c in enumerate(s1):
        if c != s2[i]:
            return s1[:i]
    return s1


