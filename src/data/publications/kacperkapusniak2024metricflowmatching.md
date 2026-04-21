---
title: "Metric Flow Matching for Smooth Interpolations on the Data Manifold"
authors:
  - Kacper Kapusniak
  - Peter Potaptchik
  - Teodora Reu
  - Leo Zhang
  - Alexander Tong
  - Michael Bronstein
  - Avishek Joey Bose
  - Francesco Di Giovanni
date: 2024-01-01
tags:
  - flow-matching
publication: "In *NeurIPS*"
abstract: >
  Matching objectives underpin the success of modern generative models and rely on constructing conditional paths that transform a source distribution into a target distribution. Despite being a fundamental building block, conditional paths have been designed principally under the assumption of Euclidean geometry, resulting in straight interpolations. However, this can be particularly restrictive for tasks such as trajectory inference, where straight paths might lie outside the data manifold, thus failing to capture the underlying dynamics giving rise to the observed marginals. In this paper, we propose Metric Flow Matching (MFM), a novel simulation-free framework for conditional flow matching where interpolants are approximate geodesics learned by minimizing the kinetic energy of a data-induced Riemannian metric. This way, the generative model matches vector fields on the data manifold, which corresponds to lower uncertainty and more meaningful interpolations. We prescribe general metrics to instantiate MFM, independent of the task, and test it on a suite of challenging problems including LiDAR navigation, unpaired image translation, and modeling cellular dynamics. We observe that MFM outperforms the Euclidean baselines, particularly achieving SOTA on single-cell trajectory prediction.
urlPdf: https://arxiv.org/abs/2405.14780
links:
  - name: Paper
    url: https://arxiv.org/abs/2405.14780
  - name: Code
    url: https://github.com/kksniak/metric-flow-matching
---

Matching objectives underpin the success of modern generative models and rely on constructing conditional paths that transform a source distribution into a target distribution. Despite being a fundamental building block, conditional paths have been designed principally under the assumption of Euclidean geometry, resulting in straight interpolations. However, this can be particularly restrictive for tasks such as trajectory inference, where straight paths might lie outside the data manifold, thus failing to capture the underlying dynamics giving rise to the observed marginals. In this paper, we propose Metric Flow Matching (MFM), a novel simulation-free framework for conditional flow matching where interpolants are approximate geodesics learned by minimizing the kinetic energy of a data-induced Riemannian metric. This way, the generative model matches vector fields on the data manifold, which corresponds to lower uncertainty and more meaningful interpolations. We prescribe general metrics to instantiate MFM, independent of the task, and test it on a suite of challenging problems including LiDAR navigation, unpaired image translation, and modeling cellular dynamics. We observe that MFM outperforms the Euclidean baselines, particularly achieving SOTA on single-cell trajectory prediction.