---
title: Single-Cell Biology & Dynamics
description: Developing machine learning methods to understand cellular development, state transitions, and responses to stimuli using single-cell omics data.
status: active
tags:
  - single-cell
  - transcriptomics
  - cellular-dynamics
  - inference
image: ../../assets/research/single-cell-biology.png
members:
  - alexander-tong
  - katarina-petrovic
publications:
  - tong2020trajectorynetadynamic
  - guillaumehuguet2022manifoldinterpolatingoptimaltransport
  - sun2026mioflow2
  - kacperkapusniak2024metricflowmatching
  - tong2023learningtranscriptionaland
  - manikkuchroo2023singlecellanalysisreveals
  - malteluecken2025definingandbenchmarking
  - danielbburkhardt2021quantifyingtheeffect
  - stock2025hiddensamplingbiases
  - alessandropalma2025generatingmultimodaland
---

We develop machine learning methods to understand how cells develop, respond to stimuli, and transition between states. Our work began with TrajectoryNet, which used dynamic optimal transport to model cellular dynamics, and has since expanded to MIOFlow, a framework that integrates manifold learning, optimal transport, and neural differential equations to infer continuous trajectories from discrete single-cell snapshots.

Current research focuses on extending these methods to incorporate spatial transcriptomics data (MIOFlow 2.0), model stochastic cellular dynamics, and benchmark the growing field of single-cell analysis methods. We also apply our tools to understand disease mechanisms—including cancer cell plasticity, inflammatory processes in macular degeneration, and pancreatic adenocarcinoma progression—at single-cell resolution.

By combining generative modeling with biological domain knowledge, we aim to build computational tools that help researchers extract mechanistic insights from high-dimensional single-cell data.

## Key Directions

- **Cellular Trajectory Inference**: Learning continuous cell state transitions using neural ODEs and optimal transport (TrajectoryNet, MIOFlow)
- **Spatial Transcriptomics**: Integrating single-cell and spatial data to uncover tissue-scale trajectories (MIOFlow 2.0)
- **Perturbation Analysis**: Quantifying cell responses to experimental treatments using graph signal processing
- **Disease Mechanisms**: Understanding cancer cell plasticity, inflammation, and disease progression at single-cell resolution
- **Benchmarking**: Defining open problems and standardized evaluation for single-cell analysis methods
