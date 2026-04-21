---
title: "Allocate-On-Use Space Complexity of Shared-Memory Algorithms"
authors:
  - James Aspnes
  - Bernhard Haeupler
  - Alexander Tong
  - Philipp Woelfel
date: 2018-01-01
publication: "In *DISC*"
abstract: >
  Many fundamental problems in shared-memory distributed computing, including mutual exclusion [8], consensus [18], and implementations of many sequential objects [14], are known to require linear space in the worst case. However, these lower bounds all work by constructing particular executions for any given algorithm that may be both very long and very improbable. The significance of these bounds is justified by an assumption that any space that is used in some execution must be allocated for all executions. This assumption is not consistent with the storage allocation mechanisms of actual practical systems.
urlPdf: https://drops.dagstuhl.de/opus/volltexte/2018/9797/pdf/LIPIcs-DISC-2018-8.pdf
links:
  - name: Paper
    url: https://drops.dagstuhl.de/opus/volltexte/2018/9797/pdf/LIPIcs-DISC-2018-8.pdf
authorNotes:
  James Aspnes: Authors ordered alphabetically
---

Many fundamental problems in shared-memory distributed computing, including mutual exclusion [8], consensus [18], and implementations of many sequential objects [14], are known to require linear space in the worst case. However, these lower bounds all work by constructing particular executions for any given algorithm that may be both very long and very improbable. The significance of these bounds is justified by an assumption that any space that is used in some execution must be allocated for all executions. This assumption is not consistent with the storage allocation mechanisms of actual practical systems.