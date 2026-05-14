---
title: "Topological Flow Matching"
authors:
  - Kacper Wyrwal
  - Ismail Ilkan Ceylan
  - Alexander Tong
date: 2026-05-07
publication: "In *ICLR 2026*"
abstract: >
  Flow matching is a powerful generative modeling framework, valued for its simplicity and strong empirical performance. However, its standard formulation treats signals on structured spaces—such as fMRI data on brain graphs—as points in Euclidean space, overlooking the rich topological features of their domains. To address this, we introduce topological flow matching, a topology-aware generalization of flow matching. We interpret flow matching as a framework for solving a degenerate Schrödinger bridge problem and inject topological information by augmenting the reference process with a Laplacian-derived drift. This principled modification captures the structure of the underlying domain while preserving the desirable properties of flow matching: a stable, simulation-free objective and deterministic sample paths. As a result, our framework serves as a plug-and-play replacement for standard flow matching. We demonstrate its effectiveness on diverse structured datasets, including brain fMRIs, ocean currents, seismic events, and traffic flows.
urlPdf: https://openreview.net/pdf?id=5CM3ax45Ma
links:
  - name: Paper
    url: https://openreview.net/forum?id=5CM3ax45Ma
  - name: Code
    url: https://github.com/KacperWyrwal/topological-flow-matching
---

Flow matching is a powerful generative modeling framework, valued for its simplicity and strong empirical performance. This work introduces a topology-aware generalization for signals on structured domains such as graphs and simplicial complexes.
