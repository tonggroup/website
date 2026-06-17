---
title: Protein Design & Molecular Structure
description: Applying generative modeling to protein design, molecular structure prediction, and crystal structure prediction using SE(3)-invariant flow matching and all-atom diffusion models.
status: active
tags:
  - proteins
  - structure-prediction
  - molecular-design
  - diffusion-models
image: ../../assets/research/protein-design.png
video: /research/disco.mp4
members:
  - alexander-tong
  - niklas-rindtorff
  - fred-zhangzhi-peng
  - alicja-maksymiuk
  - raul-minan
publications:
  - avishekjoeybose2024sestochasticflowmatching
  - guillaumehuguet2024sequenceaugmentedseflowmatching
  - rectorbrooks2026generalmultimodalprotein
  - maksymiuk2026macroguidetopological
  - emilyjin2025oxtalanallatom
  - morehead2026flowmatchingbioinformatics
---

We apply generative modeling to protein design and molecular structure prediction. Our work on SE(3) stochastic flow matching (FoldFlow) pioneered the use of flow matching on the SE(3) manifold for protein backbone generation, enabling the generation of novel protein structures with desirable properties.

Current projects span the full spectrum of molecular design: sequence-structure co-design of proteins around arbitrary biomolecules (DISCO), topological guidance for macrocycle generation (MacroGuide), and all-atom diffusion models for organic crystal structure prediction (OXtal). We also develop methods for protein-ligand docking and conformational generation using geometric deep learning.

Our goal is to build generative models that can design novel biomolecules—proteins, macrocycles, and crystalline materials—with specified functional properties, bridging the gap between machine learning and experimental validation.

## Key Directions

- **Protein Backbone Generation**: SE(3)-stochastic flow matching and sequence-augmented flow matching for novel protein structures
- **Sequence-Structure Codesign**: Joint optimization of protein sequences and 3D structures (DISCO) for enzyme design
- **Macrocycle Generation**: Topological guidance via persistent homology to steer diffusion toward ring-shaped drug candidates (MacroGuide)
- **Crystal Structure Prediction**: All-atom diffusion models for organic crystal structure prediction (OXtal)
- **Molecular Docking**: Geometric deep learning for protein-ligand docking and pocket conformation generation
