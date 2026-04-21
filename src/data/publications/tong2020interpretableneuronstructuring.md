---
title: "Interpretable Neuron Structuring with Graph Spectral Regularization"
authors:
  - Alexander Tong
  - David van Dijk
  - Jay S. Stanley III
  - Matthew Amodio
  - Kristina Yim
  - Rebecca Muhle
  - James Noonan
  - Guy Wolf
  - Smita Krishnaswamy
date: 2020-01-01
publication: "In *IDA*   Also presented at RLGM Workshop @ ICLR 2019"
abstract: >
  While neural networks are powerful approximators used to classify or embed data into lower dimensional spaces, they are often regarded as black boxes with uninterpretable features. Here we propose Graph Spectral Regularization for making hidden layers more interpretable without significantly impacting performance on the primary task. Taking inspiration from spatial organization and localization of neuron activations in biological networks, we use a graph Laplacian penalty to structure the activations within a layer. This penalty encourages activations to be smooth either on a predetermined graph or on a feature-space graph learned from the data via co-activations of a hidden layer of the neural network. We show numerous uses for this additional structure including cluster indication and visualization in biological and image data sets.
urlPdf: https://link.springer.com/content/pdf/10.1007%2F978-3-030-44584-3_40.pdf
links:
  - name: Paper
    url: https://link.springer.com/content/pdf/10.1007%2F978-3-030-44584-3_40.pdf
  - name: Code
    url: https://github.com/KrishnaswamyLab/GraphSpectralRegularization
authorNotes:
  admin: Equal Contribution
  David van Dijk: Equal Contribution
---

While neural networks are powerful approximators used to classify or embed data into lower dimensional spaces, they are often regarded as black boxes with uninterpretable features. Here we propose Graph Spectral Regularization for making hidden layers more interpretable without significantly impacting performance on the primary task. Taking inspiration from spatial organization and localization of neuron activations in biological networks, we use a graph Laplacian penalty to structure the activations within a layer. This penalty encourages activations to be smooth either on a predetermined graph or on a feature-space graph learned from the data via co-activations of a hidden layer of the neural network. We show numerous uses for this additional structure including cluster indication and visualization in biological and image data sets.