---
title: "Geodesic Sinkhorn for Fast and Accurate Optimal Transport on Manifolds"
authors:
  - Guillaume Huguet
  - Alexander Tong
  - María Ramos Zapatero
  - Christpher J. Tape
  - Guy Wolf
  - Smita Krishnaswamy
date: 2023-09-01
publication: "In *IEEE MLSP*"
abstract: >
  Efficient computation of optimal transport distance between distributions is of growing importance in data science. Sinkhorn-based methods are currently the state of the art for such computations, but require $O(n^2)$ computations. In addition, Sinkhorn-based methods commonly use an Euclidean ground distance between datapoints. However, with the prevalence of manifold structured scientific data, it is often desirable to consider geodesic ground distance. Here, we tackle both issues by proposing Geodesic Sinkhorn---based on diffusing a heat kernel on a manifold graph. Notably, Geodesic Sinkhorn requires only $O(n\log n)$ computation, as we approximate the heat kernel with Chebyshev polynomials based on the sparse graph Laplacian. We apply our method to the computation of barycenters of several distributions of high dimensional single cell data from patient samples undergoing chemotherapy. In particular we define the barycentric distance as the distance between two such barycenters. Using this definition, we identify an optimal transport distance and path associated with the effect of treatment on cellular data.
urlPdf: https://arxiv.org/abs/2211.00805
links:
  - name: Paper
    url: https://arxiv.org/abs/2211.00805
  - name: Code
    url: https://github.com/KrishnaswamyLab/GeoSinkhorn
authorNotes:
  Guillaume Huguet: Equal Contribution
  admin: Equal Contribution
---

Efficient computation of optimal transport distance between distributions is of growing importance in data science. Sinkhorn-based methods are currently the state of the art for such computations, but require $O(n^2)$ computations. In addition, Sinkhorn-based methods commonly use an Euclidean ground distance between datapoints. However, with the prevalence of manifold structured scientific data, it is often desirable to consider geodesic ground distance. Here, we tackle both issues by proposing Geodesic Sinkhorn---based on diffusing a heat kernel on a manifold graph. Notably, Geodesic Sinkhorn requires only $O(n\log n)$ computation, as we approximate the heat kernel with Chebyshev polynomials based on the sparse graph Laplacian. We apply our method to the computation of barycenters of several distributions of high dimensional single cell data from patient samples undergoing chemotherapy. In particular we define the barycentric distance as the distance between two such barycenters. Using this definition, we identify an optimal transport distance and path associated with the effect of treatment on cellular data.