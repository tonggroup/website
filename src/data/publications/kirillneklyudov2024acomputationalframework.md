---
title: "A Computational Framework for Solving Wasserstein Lagrangian Flows"
authors:
  - Kirill Neklyudov
  - Rob Brekelmans
  - Alexander Tong
  - Lazar Atanackovic
  - Qiang Liu
  - Alireza Makhzani
date: 2024-01-01
publication: "In *ICML 2024*"
abstract: >
  The dynamical formulation of the optimal transport can be extended through various choices of the underlying geometry (kinetic energy), and the regularization of density paths (potential energy). These combinations yield different variational problems (Lagrangians), encompassing many variations of the optimal transport problem such as the Schro¨dinger bridge, unbalanced optimal transport, and optimal transport with physical constraints, among others. In general, the optimal density path is unknown, and solving these variational problems can be computationally challenging. Leveraging the dual formulation of the Lagrangians, we propose a novel deep learning based framework approaching all of these problems from a unified perspective. Our method does not require simulating or backpropagating through the trajectories of the learned dynamics, and does not need access to optimal couplings. We showcase the versatility of the proposed framework by outperforming previous approaches for the single-cell trajectory inference, where incorporating prior knowledge into the dynamics is crucial for correct predictions.
urlPdf: http://arxiv.org/abs/2310.10649
links:
  - name: Paper
    url: http://arxiv.org/abs/2310.10649
  - name: Code
    url: https://github.com/necludov/wl-mechanics
authorNotes:
  Kirill Neklyudov: Equal Contribution
  Rob Brekelmans: Equal Contribution
---

The dynamical formulation of the optimal transport can be extended through various choices of the underlying geometry (kinetic energy), and the regularization of density paths (potential energy). These combinations yield different variational problems (Lagrangians), encompassing many variations of the optimal transport problem such as the Schro¨dinger bridge, unbalanced optimal transport, and optimal transport with physical constraints, among others. In general, the optimal density path is unknown, and solving these variational problems can be computationally challenging. Leveraging the dual formulation of the Lagrangians, we propose a novel deep learning based framework approaching all of these problems from a unified perspective. Our method does not require simulating or backpropagating through the trajectories of the learned dynamics, and does not need access to optimal couplings. We showcase the versatility of the proposed framework by outperforming previous approaches for the single-cell trajectory inference, where incorporating prior knowledge into the dynamics is crucial for correct predictions.