# from asyncio.windows_events import NULL
# from pyhpo import Ontology
# import random

# _ = Ontology()
# term = Ontology.get_hpo_object('Scoliosis')

# # Let's get a second term, this time using it HPO-ID
# term_2 = Ontology.get_hpo_object('HP:0009121')


# print(term_2.parent_ids())

# # print(term_2)
# # #> HP:0009121 | Abnormal axial skeleton morphology

# # # Check if the Scoliosis is a direct or indirect child
# # # of Abnormal axial skeleton morphology

# # term.child_of(term_2)
# # #> True

# # # or vice versa
# # term_2.parent_of(term)
# # #> True

# # # show all nodes between two term:
# # path = term.path_to_other(term_2)
# # for t in path[1]:
# #     print(t)

# # """
# # HP:0002650 | Scoliosis
# # HP:0010674 | Abnormality of the curvature of the vertebral column
# # HP:0000925 | Abnormality of the vertebral column
# # HP:0009121 | Abnormal axial skeleton morphology
# # """

# # print(f'Steps from Term 1 to Term 2: {path[0]}')
# #> Steps from Term 1 to Term 2: 3


# # Calculate the similarity between two terms
# # arr=[]
# # list1=list(Ontology())
# # for i in Ontology:
# #     print(i)
#     # for j in Ontology:
#     #     list1.append(i.similarity_score(j))
#     # arr.append(list1)
    
# # print(len(Ontology()))
# # print(list1[0])
# #> 0.442


# # created random 10 documents
# # link = 'http://localhost:3000/phenotypes'
# # n=random.randint(1,20)
# # listOfNodes = list(Ontology())
# # listListOfNodes = []
# # for i in range(0,10):
# #     new_list = listOfNodes[random.randint(2,5):random.randint(15,17)]
# #     listListOfNodes.append(new_list)
# # Documents = []
# # for i in range(0,10):
# #     Document={'setofphenotypes':list({'id':node,'nooftimes':random.randint(1,10)} for node in listListOfNodes[i]),"link":link}
# #     Documents.append(Document)
# # print(listListOfNodes[1])
# # print(n)
# # print((Documents[0]))



# # converting original vectors to derived vectors
# # for document in Documents:
# #     for term in document['setofphenotypes']:
# #         ancestors_list = networkx.ancestors(graph,term['id'])
# #         for node in ancestors_list:
# #             document['setofphenotypes'][int(node[3:7])%10]['nooftimes']+=document['setofphenotypes'][int(term['id'][3:7])]['nooftimes']