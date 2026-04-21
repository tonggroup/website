---
title: "Finding Archetypal Spaces Using Neural Networks"
authors:
  - David van Dijk
  - Daniel B. Burkhardt
  - Matthew Amodio
  - Alexander Tong
  - Guy Wolf
  - Smita Krishnaswamy
date: 2019-01-01
publication: "In *IEEE Big Data*"
abstract: >
  Archetypal analysis is a data decomposition method that describes each observation in a dataset as a convex combination of ''pure types'' or archetypes. These archetypes represent extrema of a data space in which there is a trade-off between features, such as in biology where different combinations of traits provide optimal fitness for different environments. Existing methods for archetypal analysis work well when a linear relationship exists between the feature space and the archetypal space. However, such methods are not applicable to systems where the feature space is generated non-linearly from the combination of archetypes, such as in biological systems or image transformations. Here, we propose a reformulation of the problem such that the goal is to learn a non-linear transformation of the data into a latent archetypal space. To solve this problem, we introduce Archetypal Analysis network (AAnet), which is a deep neural network framework for learning and generating from a latent archetypal representation of data. We demonstrate stateof-the-art recovery of ground-truth archetypes in non-linear data domains, show AAnet can generate from data geometry rather than from data density, and use AAnet to identify biologically meaningful archetypes in single-cell gene expression data.
urlPdf: https://ieeexplore.ieee.org/document/9006484/
links:
  - name: Paper
    url: https://ieeexplore.ieee.org/document/9006484/
  - name: Code
    url: https://github.com/KrishnaswamyLab/AAnet
authorNotes:
  David van Dijk: Equal Contribution
  Daniel B. Burkhardt: Equal Contribution
---

Archetypal analysis is a data decomposition method that describes each observation in a dataset as a convex combination of ''pure types'' or archetypes. These archetypes represent extrema of a data space in which there is a trade-off between features, such as in biology where different combinations of traits provide optimal fitness for different environments. Existing methods for archetypal analysis work well when a linear relationship exists between the feature space and the archetypal space. However, such methods are not applicable to systems where the feature space is generated non-linearly from the combination of archetypes, such as in biological systems or image transformations. Here, we propose a reformulation of the problem such that the goal is to learn a non-linear transformation of the data into a latent archetypal space. To solve this problem, we introduce Archetypal Analysis network (AAnet), which is a deep neural network framework for learning and generating from a latent archetypal representation of data. We demonstrate stateof-the-art recovery of ground-truth archetypes in non-linear data domains, show AAnet can generate from data geometry rather than from data density, and use AAnet to identify biologically meaningful archetypes in single-cell gene expression data.