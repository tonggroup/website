---
title: "MIOFlow 2.0: A Unified Framework for Inferring Cellular Stochastic Dynamics from Single Cell and Spatial Transcriptomics Data"
authors:
  - Xingzhi Sun
  - João Felipe Rocha
  - Brett Phelan
  - Dhananjay Bhaskar
  - Guillaume Huguet
  - Yanlei Zhang
  - Alexander Tong
  - Ke Xu
  - Oluwadamilola Fasina
  - Mark Gerstein
  - Natalia Ivanova
  - Christine L. Chaffer
  - Guy Wolf
  - Smita Krishnaswamy
date: 2026-03-23
publication: "Preprint"
abstract: >
  Understanding cellular trajectories via time-resolved single-cell transcriptomics is vital for studying development, regeneration, and disease. A key challenge is inferring continuous trajectories from discrete snapshots. Biological complexity stems from stochastic cell fate decisions, temporal proliferation changes, and spatial environmental influences. Current methods often use deterministic interpolations treating cells in isolation, failing to capture the probabilistic branching, population shifts, and niche-dependent signaling driving real biological processes. We introduce Manifold Interpolating Optimal-Transport Flow (MIOFlow) 2.0. This framework learns biologically informed cellular trajectories by integrating manifold learning, optimal transport, and neural differential equations. It models three core processes: (1) stochasticity and branching via Neural Stochastic Differential Equations; (2) non-conservative population changes using a learned growth-rate model initialized with unbalanced optimal transport; and (3) environmental influence through a joint latent space unifying gene expression with spatial features like local cell type composition and signaling. By operating in a PHATE-distance matching autoencoder latent space, MIOFlow 2.0 ensures trajectories respect the data's intrinsic geometry. Empirical comparisons show expressive trajectory learning via neural differential equations outperforms existing generative models, including simulation-free flow matching. Validated on synthetic datasets, embryoid body differentiation, and spatially resolved axolotl brain regeneration, MIOFlow 2.0 improves trajectory accuracy and reveals hidden drivers of cellular transitions, like specific signaling niches. MIOFlow 2.0 thus bridges single-cell and spatial transcriptomics to uncover tissue-scale trajectories.
urlPdf: https://arxiv.org/abs/2603.22564
links:
  - name: Paper
    url: https://arxiv.org/abs/2603.22564
---

Understanding cellular trajectories via time-resolved single-cell transcriptomics is vital for studying development, regeneration, and disease. A key challenge is inferring continuous trajectories from discrete snapshots. Biological complexity stems from stochastic cell fate decisions, temporal proliferation changes, and spatial environmental influences. Current methods often use deterministic interpolations treating cells in isolation, failing to capture the probabilistic branching, population shifts, and niche-dependent signaling driving real biological processes. We introduce Manifold Interpolating Optimal-Transport Flow (MIOFlow) 2.0. This framework learns biologically informed cellular trajectories by integrating manifold learning, optimal transport, and neural differential equations. It models three core processes: (1) stochasticity and branching via Neural Stochastic Differential Equations; (2) non-conservative population changes using a learned growth-rate model initialized with unbalanced optimal transport; and (3) environmental influence through a joint latent space unifying gene expression with spatial features like local cell type composition and signaling. By operating in a PHATE-distance matching autoencoder latent space, MIOFlow 2.0 ensures trajectories respect the data's intrinsic geometry. Empirical comparisons show expressive trajectory learning via neural differential equations outperforms existing generative models, including simulation-free flow matching. Validated on synthetic datasets, embryoid body differentiation, and spatially resolved axolotl brain regeneration, MIOFlow 2.0 improves trajectory accuracy and reveals hidden drivers of cellular transitions, like specific signaling niches. MIOFlow 2.0 thus bridges single-cell and spatial transcriptomics to uncover tissue-scale trajectories.
