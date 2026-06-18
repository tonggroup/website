---
title: "Hidden sampling biases inflate performance in gene regulatory network inference"
authors:
  - Marco Stock
  - Florin Ratajczak
  - Paul Bertin
  - Eva Hoermanseder
  - Yoshua Bengio
  - Jason Hartford
  - Pascal Falter-Braun
  - Matthias Heinig
  - Alexander Tong
  - Antonio Scialdone
date: 2025-12-23
publication: "Preprint (bioRxiv)"
abstract: >
  Accurate reconstruction of gene regulatory networks (GRNs) from single-cell transcriptomic data remains a major methodological challenge. Recent machine learning approaches, particularly graph neural networks and graph autoencoders, have reported improved performance, yet these gains do not consistently translate to realistic biological settings. Here, we show that a key reason for that is the way negative regulatory interactions are sampled for supervised training and evaluation. We find that widely used sampling strategies introduce node-degree biases that allow models to exploit trivial graph-structural cues rather than biological signals. Across multiple benchmarks, simple degree-based heuristics match or exceed state-of-the-art graph neural network models under these biased evaluation protocols. We further introduce a degree-aware sampling approach that eliminates these artifacts and provides more reliable assessments of GRN inference methods. Our results call for standardized, bias-aware benchmarking practices to ensure meaningful progress in supervised GRN inference from single-cell RNA-seq data.
urlPdf: https://www.biorxiv.org/content/10.1101/2025.12.19.695616v1
links:
  - name: Paper
    url: https://www.biorxiv.org/content/10.1101/2025.12.19.695616v1
authorNotes:
  Marco Stock: Equal Contribution
  Florin Ratajczak: Equal Contribution
---

Accurate reconstruction of gene regulatory networks (GRNs) from single-cell transcriptomic data remains a major methodological challenge. Recent machine learning approaches, particularly graph neural networks and graph autoencoders, have reported improved performance, yet these gains do not consistently translate to realistic biological settings. Here, we show that a key reason for that is the way negative regulatory interactions are sampled for supervised training and evaluation. We find that widely used sampling strategies introduce node-degree biases that allow models to exploit trivial graph-structural cues rather than biological signals. Across multiple benchmarks, simple degree-based heuristics match or exceed state-of-the-art graph neural network models under these biased evaluation protocols. We further introduce a degree-aware sampling approach that eliminates these artifacts and provides more reliable assessments of GRN inference methods. Our results call for standardized, bias-aware benchmarking practices to ensure meaningful progress in supervised GRN inference from single-cell RNA-seq data.
