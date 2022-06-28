import random
import networkx
import obonet
import matplotlib.pyplot as plt
from typing import Any, Dict, List, Optional, Set, Tuple
import math
import os
from flask import *
from pyhpo import Ontology
import sys
_ = Ontology()
graph = networkx.DiGraph()


url = "https://raw.githubusercontent.com/Centogene/pyhpo/master/pyhpo/data/hp.obo"
graph = obonet.read_obo(url)


# created random 10 documents
listOfNodes = list(graph.nodes())
listListOfNodes = []
for i in range(0, 10):
    new_list = listOfNodes[random.randint(2, 5):random.randint(10, 17)]
    listListOfNodes.append(new_list)
documents = []
for i in range(0, 10):
    Document = {f'{node}': random.randint(1, 10)
                for node in listListOfNodes[i]}
    # Document['link'] = f'link{i}'
    documents.append(Document)
# print(listListOfNodes[1])
# print(n)
# print((Documents[0]))


# # graph.has_node(stri)
# input_terms = (Documents[0])

# total_sim_score=0
# document_terms = [{'obj': Ontology.get_hpo_object(
#     terms['id']), 'nooftimes': terms['nooftimes']} for terms in input_terms['setofphenotypes']]

# input_terms = (Documents[1])
# input_terms = [Ontology.get_hpo_object(
#     terms['id']) for terms in input_terms['setofphenotypes']]


#  calculated score for each document
global total_sim_score


# # def findSimilarity(input_terms, document_terms):
#     total_sim_score = 0
#     for input_term in input_terms:
#         similarity_of_present_input = 0
#         for document_term in document_terms:
#             similarity_of_present_input = max(
#                 similarity_of_present_input, input_term.similarity_score(document_term['obj']))
#             total_sim_score = total_sim_score + \
#                 document_term['nooftimes'] * similarity_of_present_input
#     return total_sim_score


#  documents
response = []
# for document in documents:
#     document_terms = [{'obj': Ontology.get_hpo_object(
#         terms['id']), 'nooftimes': terms['nooftimes']} for terms in document['setofphenotypes']]
#     similarity_between_document_and_input_list = findSimilarity(
#         input_terms, document_terms)
#     response.append(
#         {'score': similarity_between_document_and_input_list, 'link': document['link']})


# response = sorted(response, key=lambda d: d['score'], reverse=True)


# converting original documetns to derived documents
overAllDocuments = dict()
denominator = 0.0
input_terms = ['HP:0000011', 'HP:0000012']

# documents = [ {'HP:0011368':int(4),'HP:0000234':int(1)},{'HP:0000234':int(1)} ]
# overAllDocuments.clear()
denominator = 0


# list of dictionary id,nooftimes
def convertingOrginalToDerivedVector(documents):
    global denominator
    for document in documents:
        thisDocument = document.copy()
        for term in thisDocument:
            setOfTerms = list(networkx.descendants(graph, term))
            for parent in setOfTerms:
                document[parent] = thisDocument[term] + document.get(parent, 0)
        for term in document:
            overAllDocuments[term] = overAllDocuments.get(
                term, 0)+document[term]
            denominator = denominator + document[term]

    return documents


# finding the common ancestors of two terms in a graph
def common_ancestors(self, other) -> set:

    # Return the intersection of all ancestors of self and other.
    # Consider the following edge cases:
    # - self is in other.all_parents
    # - other is in self.all_parents
    # To account for these edge cases,
    # we first add self to self.all_parents
    # and other to other.all_parents
    self_ancestors: set = (
        networkx.descendants(graph, self) | set([self])
    )
    other_ancestors: set = (
        networkx.descendants(graph, other) | set([other])
    )
    return self_ancestors & other_ancestors


# print(common_ancestors('HP:0011368','HP:0000234'))

# Finding probability

def probability(term, dictionary):
    #     print(dictionary)
    descendants = list(networkx.ancestors(graph, term))
    descendants.append(term)
#     print(descendants)
    numarator = 0
    for term in descendants:
        numarator = numarator+dictionary.get(term, 0)
#     print(numarator)
    if numarator == 0:
        numarator = 1
    return numarator/denominator


def informationContent(term, dictionary):
    #     print(term)
    p = probability(term, dictionary)
    # print(p)
    return -math.log(p)


def similarity(term1, term2):
    score = 0
    commonAncestors = common_ancestors(term1, term2)
    for term in commonAncestors:
        p_score = informationContent(term, overAllDocuments)
        if p_score > score:
            score = p_score
    return score


def findSimilarity(input_terms, document_terms):
    total_sim_score = 0
    for input_term in input_terms:
        similarity_of_present_input = 0
        for document_term in document_terms:
            similarity_of_present_input = max(
                similarity_of_present_input, similarity(input_term, document_term))
            total_sim_score = total_sim_score + \
                document_terms.get(input_term,0) * similarity_of_present_input
    return total_sim_score

documents = convertingOrginalToDerivedVector(documents)
# print(overAllDocuments)
def hellobrother(input_terms=['HP:0000011', 'HP:0000012']):
    for document in documents:
        similarity_between_document_and_input_list = findSimilarity(input_terms, document)
        response.append({'score': similarity_between_document_and_input_list, 'link': 'link'})


# print(response)

# response = sorted(response, key=lambda d: d['score'], reverse=True)
# hellobrother(session['phenotypes'])

# print(similarity('HP:0011368','HP:0000234'))
