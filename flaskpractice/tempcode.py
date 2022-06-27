import random
import networkx
import obonet
import matplotlib.pyplot as plt
import os
from pyhpo import Ontology
import sys
_ = Ontology()
graph = networkx.DiGraph()


url = "https://raw.githubusercontent.com/obophenotype/human-phenotype-ontology/master/hp.obo"
graph = obonet.read_obo(url)


# created random 100 documents
listOfNodes = list(graph.nodes())
listListOfNodes = []
for i in range(0, 100):
    new_list = listOfNodes[random.randint(2, 5):random.randint(10, 17)]
    listListOfNodes.append(new_list)
Documents = []
for i in range(0, 100):
    Document = {'setofphenotypes': list({'id': node, 'nooftimes': random.randint(
        1, 10)} for node in listListOfNodes[i]), "link": f'link{i}'}
    Documents.append(Document)
# print(listListOfNodes[1])
# print(n)
# print((Documents[0]))


# graph.has_node(stri)
input_terms = (Documents[0])

# total_sim_score=0
document_terms = [{'obj': Ontology.get_hpo_object(
    terms['id']), 'nooftimes': terms['nooftimes']} for terms in input_terms['setofphenotypes']]

input_terms = (Documents[1])
input_terms = [Ontology.get_hpo_object(terms['id']) for terms in input_terms['setofphenotypes']]


#  calculated score for each document
global total_sim_score
def findSimilarity(input_terms, document_terms):
    total_sim_score = 0
    for input_term in input_terms:
        similarity_of_present_input = 0
        for document_term in document_terms:
            similarity_of_present_input = max(
                similarity_of_present_input, input_term.similarity_score(document_term['obj']))
            total_sim_score = total_sim_score + \
                document_term['nooftimes'] * similarity_of_present_input
    return total_sim_score



#  documents 
response = []
for document in Documents:
    document_terms = [{'obj': Ontology.get_hpo_object(
        terms['id']), 'nooftimes': terms['nooftimes']} for terms in document['setofphenotypes']]
    similarity_between_document_and_input_list = findSimilarity(
        input_terms, document_terms)
    response.append(
        {'score': similarity_between_document_and_input_list, 'link': document['link']})
    
    
response=sorted(response, key=lambda d: d['score'], reverse=True)
