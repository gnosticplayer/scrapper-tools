const chance = require('chance').Chance();
const UserAgent = require('user-agents');

const macWebGls = ['ATI Technologies Inc.:AMD Radeon HD - FirePro D500 OpenGL Engine', 'ATI Technologies Inc.:AMD Radeon HD 6750M OpenGL Engine', 'ATI Technologies Inc.:AMD Radeon Pro 450 OpenGL Engine', 'ATI Technologies Inc.:AMD Radeon Pro 455 OpenGL Engine', 'ATI Technologies Inc.:AMD Radeon Pro 460 OpenGL Engine', 'ATI Technologies Inc.:AMD Radeon Pro 555 OpenGL Engine', 'ATI Technologies Inc.:AMD Radeon Pro 555X OpenGL Engine', 'ATI Technologies Inc.:AMD Radeon Pro 560 OpenGL Engine', 'ATI Technologies Inc.:AMD Radeon Pro 560X OpenGL Engine', 'ATI Technologies Inc.:AMD Radeon Pro 570 OpenGL Engine', 'ATI Technologies Inc.:AMD Radeon Pro 580 OpenGL Engine', 'ATI Technologies Inc.:AMD Radeon Pro Vega 56 OpenGL Engine', 'ATI Technologies Inc.:AMD Radeon R9 M290X OpenGL Engine', 'ATI Technologies Inc.:AMD Radeon R9 M295X OpenGL Engine', 'ATI Technologies Inc.:AMD Radeon R9 M370X OpenGL Engine', 'ATI Technologies Inc.:AMD Radeon R9 M390 OpenGL Engine', 'ATI Technologies Inc.:AMD Radeon R9 M395X OpenGL Engine', 'ATI Technologies Inc.:ATI Radeon HD 2600 PRO OpenGL Engine', 'ATI Technologies Inc.:ATI Radeon HD 5750 OpenGL Engine', 'Intel Inc.:Intel HD Graphics 3000 OpenGL Engine', 'Intel Inc.:Intel HD Graphics 4000 OpenGL Engine', 'Intel Inc.:Intel HD Graphics 5000 OpenGL Engine', 'Intel Inc.:Intel Iris OpenGL Engine', 'Intel Inc.:Intel Iris Pro OpenGL Engine', 'Intel Inc.:Intel(R) HD Graphics 515', 'Intel Inc.:Intel(R) HD Graphics 530', 'Intel Inc.:Intel(R) HD Graphics 5300', 'Intel Inc.:Intel(R) HD Graphics 6000', 'Intel Inc.:Intel(R) HD Graphics 615', 'Intel Inc.:Intel(R) HD Graphics 630', 'Intel Inc.:Intel(R) Iris(TM) Graphics 540', 'Intel Inc.:Intel(R) Iris(TM) Graphics 550', 'Intel Inc.:Intel(R) Iris(TM) Graphics 6100', 'Intel Inc.:Intel(R) Iris(TM) Graphics 650', 'Intel Inc.:Intel(R) Iris(TM) Plus Graphics 640', 'Intel Inc.:Intel(R) Iris(TM) Plus Graphics 655', 'Intel Inc.:Intel(R) UHD Graphics 617', 'Intel Inc.:Intel(R) UHD Graphics 630', 'Intel Inc.:KBL Graphics', 'NVIDIA Corporation:KBL Graphics', 'NVIDIA Corporation:Not supported', 'NVIDIA Corporation:NVIDIA GeForce 320M OpenGL Engine', 'NVIDIA Corporation:NVIDIA GeForce GT 650M OpenGL Engine', 'NVIDIA Corporation:NVIDIA GeForce GT 750M OpenGL Engine', 'NVIDIA Corporation:NVIDIA GeForce GTX 1050 Ti OpenGL Engine', 'NVIDIA Corporation:NVIDIA GeForce GTX 1070 OpenGL Engine', 'NVIDIA Corporation:NVIDIA GeForce GTX 1080 OpenGL Engine', 'NVIDIA Corporation:NVIDIA GeForce GTX 660M OpenGL Engine', 'NVIDIA Corporation:NVIDIA GeForce GTX 675MX OpenGL Engine', 'NVIDIA Corporation:NVIDIA GeForce GTX 960 OpenGL Engine', 'NVIDIA Corporation:NVIDIA GeForce GTX 970 OpenGL Engine'];
const macWeights = ['7', '5', '18', '12', '48', '34', '38', '123', '43', '1', '3', '1', '2', '1', '88', '20', '1', '3', '2', '7', '52', '60', '56', '200', '4', '4', '2', '131', '7', '7', '14', '39', '134', '58', '376', '29', '2', '7', '2', '2', '6', '3', '37', '24', '4', '4', '1', '1', '1', '1', '2'];
const linuxWebGls = ['NVIDIA Corporation:GeForce 210/PCIe/SSE2', 'NVIDIA Corporation:GeForce 315M/PCIe/SSE2', 'NVIDIA Corporation:GeForce 820M/PCIe/SSE2', 'NVIDIA Corporation:GeForce 8400 GS/PCIe/SSE2', 'NVIDIA Corporation:GeForce 940M/PCIe/SSE2', 'NVIDIA Corporation:GeForce GT 1030/PCIe/SSE2', 'NVIDIA Corporation:GeForce GT 610/PCIe/SSE2', 'NVIDIA Corporation:GeForce GT 635M/PCIe/SSE2', 'NVIDIA Corporation:GeForce GT 640M LE/PCIe/SSE2', 'NVIDIA Corporation:GeForce GT 650M/PCIe/SSE2', 'NVIDIA Corporation:GeForce GT 710/PCIe/SSE2', 'NVIDIA Corporation:GeForce GT 730/PCIe/SSE2', 'NVIDIA Corporation:GeForce GT 740M/PCIe/SSE2', 'NVIDIA Corporation:GeForce GTX 1050 Ti with Max-Q Design/PCIe/SSE2', 'NVIDIA Corporation:GeForce GTX 1050 Ti/PCIe/SSE2', 'NVIDIA Corporation:GeForce GTX 1050/PCIe/SSE2', 'NVIDIA Corporation:GeForce GTX 1060 with Max-Q Design/PCIe/SSE2', 'NVIDIA Corporation:GeForce GTX 1060/PCIe/SSE2', 'NVIDIA Corporation:GeForce GTX 1070/PCIe/SSE2', 'NVIDIA Corporation:GeForce GTX 1080 Ti/PCIe/SSE2', 'NVIDIA Corporation:GeForce GTX 1080/PCIe/SSE2', 'NVIDIA Corporation:GeForce GTX 550 Ti/PCIe/SSE2', 'NVIDIA Corporation:GeForce GTX 560 Ti/PCIe/SSE2', 'NVIDIA Corporation:GeForce GTX 650 Ti/PCIe/SSE2', 'NVIDIA Corporation:GeForce GTX 660/PCIe/SSE2', 'NVIDIA Corporation:GeForce GTX 750 Ti/PCIe/SSE2', 'NVIDIA Corporation:GeForce GTX 750/PCIe/SSE2', 'NVIDIA Corporation:GeForce GTX 860M/PCIe/SSE2', 'NVIDIA Corporation:GeForce GTX 950M/PCIe/SSE2', 'NVIDIA Corporation:GeForce GTX 960M/PCIe/SSE2', 'NVIDIA Corporation:GeForce GTX 970/PCIe/SSE2', 'NVIDIA Corporation:GeForce MX150/PCIe/SSE2', 'NVIDIA Corporation:GeForce RTX 2080 Ti/PCIe/SSE2', 'Intel Open Source Technology Center:Mesa DRI Intel(R) Bay Trail ', 'Intel Open Source Technology Center:Mesa DRI Intel(R) Haswell ', 'Intel Open Source Technology Center:Mesa DRI Intel(R) Haswell Desktop ', 'Intel Open Source Technology Center:Mesa DRI Intel(R) Haswell Mobile ', 'Intel Open Source Technology Center:Mesa DRI Intel(R) HD Graphics (Coffeelake 3x8 GT2) ', 'Intel Open Source Technology Center:Mesa DRI Intel(R) HD Graphics 400 (Braswell) ', 'Intel Open Source Technology Center:Mesa DRI Intel(R) HD Graphics 520 (Skylake GT2) ', 'Intel Open Source Technology Center:Mesa DRI Intel(R) HD Graphics 530 (Skylake GT2) ', 'Intel Open Source Technology Center:Mesa DRI Intel(R) HD Graphics 5500 (Broadwell GT2) ', 'Intel Open Source Technology Center:Mesa DRI Intel(R) HD Graphics 620 (Kaby Lake GT2) ', 'Intel Open Source Technology Center:Mesa DRI Intel(R) HD Graphics 620 (Kabylake GT2) ', 'Intel Open Source Technology Center:Mesa DRI Intel(R) HD Graphics 630 (Kaby Lake GT2) ', 'Intel Open Source Technology Center:Mesa DRI Intel(R) Ironlake Desktop ', 'Intel Open Source Technology Center:Mesa DRI Intel(R) Ironlake Mobile ', 'Intel Open Source Technology Center:Mesa DRI Intel(R) Ivybridge Desktop ', 'Intel Open Source Technology Center:Mesa DRI Intel(R) Ivybridge Mobile ', 'Intel Open Source Technology Center:Mesa DRI Intel(R) Q45/Q43 ', 'Intel Open Source Technology Center:Mesa DRI Intel(R) Sandybridge Desktop ', 'Intel Open Source Technology Center:Mesa DRI Intel(R) Sandybridge Mobile ', 'Intel Open Source Technology Center:Mesa DRI Intel(R) UHD Graphics 620 (Kabylake GT2) ', 'Intel Open Source Technology Center:Mesa DRI Intel(R) UHD Graphics 630 (Coffeelake 3x8 GT2) ', 'Google Inc.:ANGLE (AMD 760G (Microsoft Corporation WDDM 1.1) Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (AMD 760G Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (AMD FirePro M5950 Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (AMD FirePro W5100 Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (AMD M880G with ATI Mobility Radeon HD 4250 Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (AMD Radeon (TM) R9 200 Series Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (AMD Radeon (TM) R9 380 Series Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (AMD Radeon HD 5450 Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (AMD Radeon HD 6290 Graphics Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (AMD Radeon HD 6310 Graphics Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (AMD Radeon HD 6320 Graphics Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (AMD RADEON HD 6350 Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (AMD Radeon HD 6450 Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (AMD Radeon HD 6450 Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (AMD RADEON HD 6450 Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (AMD Radeon HD 6500M/5600/5700 Series Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (AMD Radeon HD 6530D Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (AMD Radeon HD 6630M Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (AMD Radeon HD 6670 Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (AMD Radeon HD 6800 Series Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (AMD Radeon HD 6800 Series Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (AMD Radeon HD 7310 Graphics Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (AMD Radeon HD 7340 Graphics Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (AMD Radeon HD 7420G Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (AMD Radeon HD 7480D Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (AMD Radeon HD 7520G Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (AMD Radeon HD 7600M Series Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (AMD Radeon HD 7620G Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (AMD Radeon HD 7640G Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (AMD Radeon HD 7700 Series Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (AMD Radeon HD 7700 Series Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (AMD Radeon HD 7800 Series Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (AMD Radeon HD 7800 Series Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (AMD Radeon HD 7900 Series Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (AMD Radeon HD 8210 Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (AMD Radeon HD 8240 Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (AMD Radeon HD 8610G + 8500M Dual Graphics Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (AMD Radeon HD 8650D Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (AMD Radeon R5 430 Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (AMD Radeon R7 200 Series Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (AMD Radeon R7 Graphics Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (AMD Radeon R9 200 / HD 7900 Series Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (AMD Radeon R9 200 Series Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (AMD Radeon R9 M370X Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (AMD Radeon(TM) HD 6480G Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (AMD Radeon(TM) HD 6520G Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (AMD Radeon(TM) HD 7450 Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (AMD Radeon(TM) HD8490 Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (AMD Radeon(TM) R2 Graphics Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (AMD Radeon(TM) R4 Graphics Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (AMD Radeon(TM) R5 240 Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (AMD Radeon(TM) R5 Graphics Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (AMD Radeon(TM) R6 Graphics Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (AMD Radeon(TM) R7 350X Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (AMD Radeon(TM) R7 Graphics Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (AMD Radeon(TM) Vega 8 Graphics Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (AMD Radeon(TM) Vega 8 Mobile Graphics Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (ASUS R7 240 Series Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (ASUS R7 265 Series Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (ATI FirePro V3800 Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (ATI Mobility Radeon HD 2400 XT Direct3D11 vs_4_0 ps_4_0)', 'Google Inc.:ANGLE (ATI Mobility Radeon HD 3470  Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (ATI Mobility Radeon HD 4250 Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (ATI Mobility Radeon HD 4300 Series Direct3D11 vs_4_1 ps_4_1)', 'Google Inc.:ANGLE (ATI Mobility Radeon HD 5470 Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (ATI Mobility Radeon HD 5650 Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (ATI Radeon 3000 Graphics Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (ATI Radeon HD 3200 Graphics Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (ATI Radeon HD 3800 Series Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (ATI Radeon HD 4200 Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (ATI Radeon HD 4300/4500 Series        Direct3D11 vs_4_1 ps_4_1)', 'Google Inc.:ANGLE (ATI Radeon HD 4300/4500 Series Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (ATI Radeon HD 4600 Series Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (ATI Radeon HD 5450 Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (ATI Radeon HD 5570 Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (Intel(R) 4 Series Internal Chipset Direct3D9 vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (Intel(R) 4 Series Internal Chipset Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (Intel(R) 82945G Express Chipset Family Direct3D9 vs_0_0 ps_2_0)', 'Google Inc.:ANGLE (Intel(R) 82945G Express Chipset Family Direct3D9Ex vs_0_0 ps_2_0)', 'Google Inc.:ANGLE (Intel(R) G33/G31 Express Chipset Family (Microsoft Corporation - WDDM 1.0) Direct3D9Ex vs_0_0 ps_2_0)', 'Google Inc.:ANGLE (Intel(R) G33/G31 Express Chipset Family Direct3D9 vs_0_0 ps_2_0)', 'Google Inc.:ANGLE (Intel(R) G33/G31 Express Chipset Family Direct3D9Ex vs_0_0 ps_2_0)', 'Google Inc.:ANGLE (Intel(R) G33/G31 Express Chipset Family)', 'Google Inc.:ANGLE (Intel(R) G41 Express Chipset (Microsoft Corporation - WDDM 1.1) Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (Intel(R) G41 Express Chipset Direct3D9 vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (Intel(R) G41 Express Chipset Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (Intel(R) G41 Express Chipset)', 'Google Inc.:ANGLE (Intel(R) G45/G43 Express Chipset Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (Intel(R) Graphics Media Accelerator 3150 Direct3D9Ex vs_0_0 ps_2_0)', 'Google Inc.:ANGLE (Intel(R) Graphics Media Accelerator 3600 Series Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (Intel(R) Graphics Media Accelerator HD Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (Intel(R) HD Graphics 3000 Direct3D11 vs_4_1 ps_4_1)', 'Google Inc.:ANGLE (Intel(R) HD Graphics 3000 Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (Intel(R) HD Graphics 3000)', 'Google Inc.:ANGLE (Intel(R) HD Graphics 4000 Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (Intel(R) HD Graphics 4000 Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (Intel(R) HD Graphics 4000)', 'Google Inc.:ANGLE (Intel(R) HD Graphics 4400 Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (Intel(R) HD Graphics 4400 Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (Intel(R) HD Graphics 4600 Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (Intel(R) HD Graphics 4600 Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (Intel(R) HD Graphics 5000 Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (Intel(R) HD Graphics 510 Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (Intel(R) HD Graphics 515 Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (Intel(R) HD Graphics 520 Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (Intel(R) HD Graphics 520 Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (Intel(R) HD Graphics 530 Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (Intel(R) HD Graphics 5500 Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (Intel(R) HD Graphics 5500 Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (Intel(R) HD Graphics 620 Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (Intel(R) HD Graphics 630 Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (Intel(R) HD Graphics 630 Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (Intel(R) HD Graphics Direct3D11 vs_4_0 ps_4_0)', 'Google Inc.:ANGLE (Intel(R) HD Graphics Direct3D11 vs_4_1 ps_4_1)', 'Google Inc.:ANGLE (Intel(R) HD Graphics Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (Intel(R) HD Graphics Direct3D9 vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (Intel(R) HD Graphics Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (Intel(R) HD Graphics Family Direct3D11 vs_4_1 ps_4_1)', 'Google Inc.:ANGLE (Intel(R) HD Graphics Family Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (Intel(R) HD Graphics Family Direct3D9 vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (Intel(R) HD Graphics Family Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (Intel(R) HD Graphics Family)', 'Google Inc.:ANGLE (Intel(R) HD Graphics P630 Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (Intel(R) HD Graphics)', 'Google Inc.:ANGLE (Intel(R) Iris(R) Graphics 540 Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (Intel(R) Iris(R) Plus Graphics 640 Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (Intel(R) Iris(R) Plus Graphics 650 Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (Intel(R) Iris(TM) Graphics 5100 Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (Intel(R) Iris(TM) Graphics 6100 Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (Intel(R) Iris(TM) Plus Graphics 640 Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (Intel(R) Q35 Express Chipset Family (Microsoft Corporation - WDDM 1.0) Direct3D9Ex vs_0_0 ps_2_0)', 'Google Inc.:ANGLE (Intel(R) Q35 Express Chipset Family Direct3D9 vs_0_0 ps_2_0)', 'Google Inc.:ANGLE (Intel(R) Q35 Express Chipset Family Direct3D9Ex vs_0_0 ps_2_0)', 'Google Inc.:ANGLE (Intel(R) Q45/Q43 Express Chipset (Microsoft Corporation - WDDM 1.1) Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (Intel(R) Q45/Q43 Express Chipset Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (Intel(R) Q965/Q963 Express Chipset Family (Microsoft Corporation - WDDM 1.0) Direct3D9Ex vs_0_0 ps_2_0)', 'Google Inc.:ANGLE (Intel(R) Q965/Q963 Express Chipset Family Direct3D9 vs_0_0 ps_2_0)', 'Google Inc.:ANGLE (Intel(R) Q965/Q963 Express Chipset Family Direct3D9Ex vs_0_0 ps_2_0)', 'Google Inc.:ANGLE (Intel(R) UHD Graphics 620 Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (Intel(R) UHD Graphics 630 Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (Microsoft Basic Render Driver Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (Mobile Intel(R) 4 Series Express Chipset Family (Microsoft Corporation - WDDM 1.1) Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (Mobile Intel(R) 4 Series Express Chipset Family Direct3D11 vs_4_0 ps_4_0)', 'Google Inc.:ANGLE (Mobile Intel(R) 4 Series Express Chipset Family Direct3D9 vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (Mobile Intel(R) 4 Series Express Chipset Family Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (Mobile Intel(R) 45 Express Chipset Family (Microsoft Corporation - WDDM 1.1) Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (Mobile Intel(R) 965 Express Chipset Family (Microsoft Corporation - WDDM 1.1) Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (Mobile Intel(R) 965 Express Chipset Family Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (Mobile Intel(R) 965 Express Chipset Family)', 'Google Inc.:ANGLE (NVIDIA GeForce 210  Direct3D11 vs_4_1 ps_4_1)', 'Google Inc.:ANGLE (NVIDIA GeForce 210 Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (NVIDIA GeForce 310M Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (NVIDIA GeForce 410M Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA GeForce 605 Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA GeForce 6150SE nForce 430 Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (NVIDIA GeForce 7025 / NVIDIA nForce 630a (Microsoft Corporation - WDDM) Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (NVIDIA GeForce 7025 / NVIDIA nForce 630a Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (NVIDIA GeForce 7600 GT  Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (NVIDIA GeForce 8400 GS Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (NVIDIA GeForce 8600 GT Direct3D9 vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (NVIDIA GeForce 9200 Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (NVIDIA GeForce 9300M GS  Direct3D11 vs_4_0 ps_4_0)', 'Google Inc.:ANGLE (NVIDIA GeForce 940MX Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA GeForce 9500 GT Direct3D11 vs_4_0 ps_4_0)', 'Google Inc.:ANGLE (NVIDIA GeForce 9500 GT Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (NVIDIA GeForce 9500 GT)', 'Google Inc.:ANGLE (NVIDIA GeForce 9600M GT    Direct3D11 vs_4_0 ps_4_0)', 'Google Inc.:ANGLE (NVIDIA GeForce 9800 GT Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (NVIDIA GeForce G100)', 'Google Inc.:ANGLE (NVIDIA GeForce GT 220  Direct3D11 vs_4_1 ps_4_1)', 'Google Inc.:ANGLE (NVIDIA GeForce GT 220 Direct3D9 vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (NVIDIA GeForce GT 220 Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (NVIDIA GeForce GT 240 Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (NVIDIA GeForce GT 430 Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA GeForce GT 430 Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (NVIDIA GeForce GT 430)', 'Google Inc.:ANGLE (NVIDIA GeForce GT 440 Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (NVIDIA GeForce GT 540M Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA GeForce GT 610 Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA GeForce GT 610 Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (NVIDIA GeForce GT 620  Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA GeForce GT 620 Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA GeForce GT 620 Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (NVIDIA GeForce GT 630 Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA GeForce GT 630 Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (NVIDIA GeForce GT 640 Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA GeForce GT 640 Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (NVIDIA GeForce GT 705 Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA GeForce GT 710 Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA GeForce GT 720 Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA GeForce GT 730   Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA GeForce GT 730 Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA GeForce GT 740 Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA GeForce GT 750M Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA GeForce GTS 250 Direct3D11 vs_4_0 ps_4_0)', 'Google Inc.:ANGLE (NVIDIA GeForce GTS 450 Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA GeForce GTX 1050 Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA GeForce GTX 1050 Ti Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA GeForce GTX 1050 Ti with Max-Q Design Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA GeForce GTX 1060 3GB Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA GeForce GTX 1060 6GB Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA GeForce GTX 1060 Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA GeForce GTX 1070 Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA GeForce GTX 1070 Ti Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA GeForce GTX 1080 Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA GeForce GTX 1080 Ti Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA GeForce GTX 260 Direct3D11 vs_4_0 ps_4_0)', 'Google Inc.:ANGLE (NVIDIA GeForce GTX 550 Ti Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA GeForce GTX 550 Ti Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (NVIDIA GeForce GTX 560 Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA GeForce GTX 560 Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (NVIDIA GeForce GTX 560 Ti Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA GeForce GTX 560M Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA GeForce GTX 570 Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA GeForce GTX 580 Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA GeForce GTX 650 Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA GeForce GTX 650 Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (NVIDIA GeForce GTX 650 Ti  Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA GeForce GTX 650 Ti Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA GeForce GTX 660 Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA GeForce GTX 660 Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (NVIDIA GeForce GTX 670 Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA GeForce GTX 745 Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA GeForce GTX 745 Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (NVIDIA GeForce GTX 750 Ti Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA GeForce GTX 760 (192-bit) Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA GeForce GTX 760 Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA GeForce GTX 770 Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA GeForce GTX 780 Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA GeForce GTX 780 Ti Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA GeForce GTX 870M Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA GeForce GTX 950M Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA GeForce GTX 960 Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA GeForce GTX 970 Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA GeForce GTX 970M Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA GeForce GTX 980 Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA GeForce GTX 980 Ti Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA GeForce GTX TITAN Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA NVS 2100M Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (NVIDIA NVS 300 Direct3D11 vs_4_1 ps_4_1)', 'Google Inc.:ANGLE (NVIDIA NVS 310 Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA NVS 3100M  Direct3D11 vs_4_1 ps_4_1)', 'Google Inc.:ANGLE (NVIDIA NVS 315 Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA NVS 4200M Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA NVS 5100M Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (NVIDIA Quadro 1000M  Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA Quadro 2000M Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA Quadro 2000M Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (NVIDIA Quadro K1000M Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA Quadro K2000 Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA Quadro K2000M Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA Quadro K2100M Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA Quadro K3000M Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA Quadro K420 Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA Quadro K420 Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (NVIDIA Quadro K600 Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA Quadro K620 Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA Quadro M1000M Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA Quadro M1200 Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA Quadro M2000  Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA Quadro M2000 Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA Quadro M2000M Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA Quadro M4000M Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA Quadro NVS 140M)', 'Google Inc.:ANGLE (NVIDIA Quadro NVS 160M Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (NVIDIA Quadro NVS 295 Direct3D11 vs_4_0 ps_4_0)', 'Google Inc.:ANGLE (NVIDIA Quadro P4000 Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA Quadro P600 Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (Parallels Display Adapter (WDDM) Direct3D11 vs_4_1 ps_4_1)', 'Google Inc.:ANGLE (Radeon (TM) RX 470 Graphics Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (Radeon (TM) RX 480 Graphics Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (Radeon HD 6470M Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (Radeon RX 580 Series Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (Radeon(TM) RX 460 Graphics Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (RDPDD Chained DD Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (SiS Mirage 3 Graphics Direct3D9Ex vs_2_0 ps_2_0)', 'Google Inc.:ANGLE (Software Adapter Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (VMware SVGA 3D Direct3D11 vs_4_0 ps_4_0)', 'Google Inc.:ANGLE (VMware SVGA 3D Direct3D9Ex vs_3_0 ps_3_0)'];
const linuxWeights = ['1', '2', '2', '2', '1', '7', '3', '1', '1', '1', '1', '3', '5', '2', '1', '4', '1', '1', '22', '7', '10', '4', '1', '1', '1', '1', '1', '3', '4', '6', '1', '7', '2', '6', '2', '25', '16', '26', '2', '17', '12', '14', '33', '3', '42', '1', '6', '5', '4', '3', '2', '18', '65', '5', '25', '37', '1', '1', '29', '1', '4', '1', '49', '36', '31', '27', '4', '24', '18', '39', '2', '1', '1', '5', '38', '21', '32', '2', '6', '27', '3', '3', '28', '7', '31', '11', '31', '18', '1', '40', '29', '1', '1', '6', '6', '11', '34', '3', '21', '28', '1', '1', '1', '4', '4', '10', '1', '3', '7', '4', '8', '2', '1', '1', '1', '1', '32', '1', '24', '31', '19', '27', '37', '37', '1', '28', '26', '37', '38', '27', '27', '27', '24', '27', '31', '33', '31', '37', '28', '29', '37', '27', '30', '32', '25', '31', '29', '37', '138', '39', '32', '9', '1', '141', '52', '21', '16', '9', '227', '2', '143', '73', '1', '164', '121', '1', '2', '13', '87', '33', '115', '2', '160', '39', '112', '29', '1', '32', '6', '1', '2', '1', '1', '5', '31', '29', '32', '1', '31', '34', '20', '34', '97', '84', '17', '1', '2', '38', '29', '28', '1', '30', '32', '6', '44', '28', '6', '7', '38', '30', '33', '1', '45', '28', '29', '1', '3', '2', '35', '29', '1', '38', '30', '1', '41', '20', '27', '1', '35', '31', '37', '13', '2', '29', '8', '1', '41', '27', '26', '3', '35', '1', '4', '1', '1', '3', '1', '1', '1', '1', '4', '25', '1', '15', '21', '10', '29', '4', '59', '23', '6', '1', '31', '1', '29', '5', '1', '1', '2', '1', '25', '1', '3', '2', '31', '4', '2', '1', '3', '1', '112', '1', '8', '2', '1', '6', '31', '14', '1', '8', '3', '1', '2', '3', '4', '1', '33', '1', '1', '1', '38', '35', '2', '2', '32', '1', '1', '6', '36', '2', '2', '2', '2', '3', '1', '2', '3', '39', '28', '1', '9', '1', '1', '1', '1', '3', '11', '3', '2', '36', '10', '1', '2'];
const windowsWebGls = ['Google Inc.:ANGLE (AMD 760G (Microsoft Corporation WDDM 1.1) Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (AMD 760G Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (AMD FirePro M5950 Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (AMD FirePro W5100 Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (AMD M880G with ATI Mobility Radeon HD 4250 Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (AMD Radeon (TM) R9 200 Series Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (AMD Radeon (TM) R9 380 Series Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (AMD Radeon HD 5450 Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (AMD Radeon HD 6290 Graphics Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (AMD Radeon HD 6310 Graphics Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (AMD Radeon HD 6320 Graphics Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (AMD RADEON HD 6350 Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (AMD Radeon HD 6450 Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (AMD Radeon HD 6450 Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (AMD RADEON HD 6450 Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (AMD Radeon HD 6500M/5600/5700 Series Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (AMD Radeon HD 6530D Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (AMD Radeon HD 6630M Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (AMD Radeon HD 6670 Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (AMD Radeon HD 6800 Series Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (AMD Radeon HD 6800 Series Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (AMD Radeon HD 7310 Graphics Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (AMD Radeon HD 7340 Graphics Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (AMD Radeon HD 7420G Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (AMD Radeon HD 7480D Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (AMD Radeon HD 7520G Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (AMD Radeon HD 7600M Series Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (AMD Radeon HD 7620G Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (AMD Radeon HD 7640G Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (AMD Radeon HD 7700 Series Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (AMD Radeon HD 7700 Series Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (AMD Radeon HD 7800 Series Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (AMD Radeon HD 7800 Series Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (AMD Radeon HD 7900 Series Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (AMD Radeon HD 8210 Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (AMD Radeon HD 8240 Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (AMD Radeon HD 8610G + 8500M Dual Graphics Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (AMD Radeon HD 8650D Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (AMD Radeon R5 430 Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (AMD Radeon R7 200 Series Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (AMD Radeon R7 Graphics Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (AMD Radeon R9 200 / HD 7900 Series Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (AMD Radeon R9 200 Series Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (AMD Radeon R9 M370X Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (AMD Radeon(TM) HD 6480G Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (AMD Radeon(TM) HD 6520G Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (AMD Radeon(TM) HD 7450 Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (AMD Radeon(TM) HD8490 Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (AMD Radeon(TM) R2 Graphics Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (AMD Radeon(TM) R4 Graphics Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (AMD Radeon(TM) R5 240 Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (AMD Radeon(TM) R5 Graphics Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (AMD Radeon(TM) R6 Graphics Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (AMD Radeon(TM) R7 350X Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (AMD Radeon(TM) R7 Graphics Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (AMD Radeon(TM) Vega 8 Graphics Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (AMD Radeon(TM) Vega 8 Mobile Graphics Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (ASUS R7 240 Series Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (ASUS R7 265 Series Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (ATI FirePro V3800 Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (ATI Mobility Radeon HD 2400 XT Direct3D11 vs_4_0 ps_4_0)', 'Google Inc.:ANGLE (ATI Mobility Radeon HD 3470  Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (ATI Mobility Radeon HD 4250 Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (ATI Mobility Radeon HD 4300 Series Direct3D11 vs_4_1 ps_4_1)', 'Google Inc.:ANGLE (ATI Mobility Radeon HD 5470 Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (ATI Mobility Radeon HD 5650 Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (ATI Radeon 3000 Graphics Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (ATI Radeon HD 3200 Graphics Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (ATI Radeon HD 3800 Series Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (ATI Radeon HD 4200 Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (ATI Radeon HD 4300/4500 Series        Direct3D11 vs_4_1 ps_4_1)', 'Google Inc.:ANGLE (ATI Radeon HD 4300/4500 Series Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (ATI Radeon HD 4600 Series Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (ATI Radeon HD 5450 Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (ATI Radeon HD 5570 Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (Intel(R) 4 Series Internal Chipset Direct3D9 vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (Intel(R) 4 Series Internal Chipset Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (Intel(R) 82945G Express Chipset Family Direct3D9 vs_0_0 ps_2_0)', 'Google Inc.:ANGLE (Intel(R) 82945G Express Chipset Family Direct3D9Ex vs_0_0 ps_2_0)', 'Google Inc.:ANGLE (Intel(R) G33/G31 Express Chipset Family (Microsoft Corporation - WDDM 1.0) Direct3D9Ex vs_0_0 ps_2_0)', 'Google Inc.:ANGLE (Intel(R) G33/G31 Express Chipset Family Direct3D9 vs_0_0 ps_2_0)', 'Google Inc.:ANGLE (Intel(R) G33/G31 Express Chipset Family Direct3D9Ex vs_0_0 ps_2_0)', 'Google Inc.:ANGLE (Intel(R) G33/G31 Express Chipset Family)', 'Google Inc.:ANGLE (Intel(R) G41 Express Chipset (Microsoft Corporation - WDDM 1.1) Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (Intel(R) G41 Express Chipset Direct3D9 vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (Intel(R) G41 Express Chipset Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (Intel(R) G41 Express Chipset)', 'Google Inc.:ANGLE (Intel(R) G45/G43 Express Chipset Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (Intel(R) Graphics Media Accelerator 3150 Direct3D9Ex vs_0_0 ps_2_0)', 'Google Inc.:ANGLE (Intel(R) Graphics Media Accelerator 3600 Series Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (Intel(R) Graphics Media Accelerator HD Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (Intel(R) HD Graphics 3000 Direct3D11 vs_4_1 ps_4_1)', 'Google Inc.:ANGLE (Intel(R) HD Graphics 3000 Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (Intel(R) HD Graphics 3000)', 'Google Inc.:ANGLE (Intel(R) HD Graphics 4000 Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (Intel(R) HD Graphics 4000 Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (Intel(R) HD Graphics 4000)', 'Google Inc.:ANGLE (Intel(R) HD Graphics 4400 Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (Intel(R) HD Graphics 4400 Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (Intel(R) HD Graphics 4600 Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (Intel(R) HD Graphics 4600 Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (Intel(R) HD Graphics 5000 Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (Intel(R) HD Graphics 510 Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (Intel(R) HD Graphics 515 Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (Intel(R) HD Graphics 520 Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (Intel(R) HD Graphics 520 Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (Intel(R) HD Graphics 530 Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (Intel(R) HD Graphics 5500 Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (Intel(R) HD Graphics 5500 Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (Intel(R) HD Graphics 620 Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (Intel(R) HD Graphics 630 Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (Intel(R) HD Graphics 630 Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (Intel(R) HD Graphics Direct3D11 vs_4_0 ps_4_0)', 'Google Inc.:ANGLE (Intel(R) HD Graphics Direct3D11 vs_4_1 ps_4_1)', 'Google Inc.:ANGLE (Intel(R) HD Graphics Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (Intel(R) HD Graphics Direct3D9 vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (Intel(R) HD Graphics Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (Intel(R) HD Graphics Family Direct3D11 vs_4_1 ps_4_1)', 'Google Inc.:ANGLE (Intel(R) HD Graphics Family Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (Intel(R) HD Graphics Family Direct3D9 vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (Intel(R) HD Graphics Family Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (Intel(R) HD Graphics Family)', 'Google Inc.:ANGLE (Intel(R) HD Graphics P630 Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (Intel(R) HD Graphics)', 'Google Inc.:ANGLE (Intel(R) Iris(R) Graphics 540 Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (Intel(R) Iris(R) Plus Graphics 640 Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (Intel(R) Iris(R) Plus Graphics 650 Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (Intel(R) Iris(TM) Graphics 5100 Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (Intel(R) Iris(TM) Graphics 6100 Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (Intel(R) Iris(TM) Plus Graphics 640 Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (Intel(R) Q35 Express Chipset Family (Microsoft Corporation - WDDM 1.0) Direct3D9Ex vs_0_0 ps_2_0)', 'Google Inc.:ANGLE (Intel(R) Q35 Express Chipset Family Direct3D9 vs_0_0 ps_2_0)', 'Google Inc.:ANGLE (Intel(R) Q35 Express Chipset Family Direct3D9Ex vs_0_0 ps_2_0)', 'Google Inc.:ANGLE (Intel(R) Q45/Q43 Express Chipset (Microsoft Corporation - WDDM 1.1) Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (Intel(R) Q45/Q43 Express Chipset Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (Intel(R) Q965/Q963 Express Chipset Family (Microsoft Corporation - WDDM 1.0) Direct3D9Ex vs_0_0 ps_2_0)', 'Google Inc.:ANGLE (Intel(R) Q965/Q963 Express Chipset Family Direct3D9 vs_0_0 ps_2_0)', 'Google Inc.:ANGLE (Intel(R) Q965/Q963 Express Chipset Family Direct3D9Ex vs_0_0 ps_2_0)', 'Google Inc.:ANGLE (Intel(R) UHD Graphics 620 Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (Intel(R) UHD Graphics 630 Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (Microsoft Basic Render Driver Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (Mobile Intel(R) 4 Series Express Chipset Family (Microsoft Corporation - WDDM 1.1) Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (Mobile Intel(R) 4 Series Express Chipset Family Direct3D11 vs_4_0 ps_4_0)', 'Google Inc.:ANGLE (Mobile Intel(R) 4 Series Express Chipset Family Direct3D9 vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (Mobile Intel(R) 4 Series Express Chipset Family Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (Mobile Intel(R) 45 Express Chipset Family (Microsoft Corporation - WDDM 1.1) Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (Mobile Intel(R) 965 Express Chipset Family (Microsoft Corporation - WDDM 1.1) Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (Mobile Intel(R) 965 Express Chipset Family Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (Mobile Intel(R) 965 Express Chipset Family)', 'Google Inc.:ANGLE (NVIDIA GeForce 210  Direct3D11 vs_4_1 ps_4_1)', 'Google Inc.:ANGLE (NVIDIA GeForce 210 Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (NVIDIA GeForce 310M Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (NVIDIA GeForce 410M Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA GeForce 605 Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA GeForce 6150SE nForce 430 Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (NVIDIA GeForce 7025 / NVIDIA nForce 630a (Microsoft Corporation - WDDM) Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (NVIDIA GeForce 7025 / NVIDIA nForce 630a Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (NVIDIA GeForce 7600 GT  Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (NVIDIA GeForce 8400 GS Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (NVIDIA GeForce 8600 GT Direct3D9 vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (NVIDIA GeForce 9200 Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (NVIDIA GeForce 9300M GS  Direct3D11 vs_4_0 ps_4_0)', 'Google Inc.:ANGLE (NVIDIA GeForce 940MX Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA GeForce 9500 GT Direct3D11 vs_4_0 ps_4_0)', 'Google Inc.:ANGLE (NVIDIA GeForce 9500 GT Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (NVIDIA GeForce 9500 GT)', 'Google Inc.:ANGLE (NVIDIA GeForce 9600M GT    Direct3D11 vs_4_0 ps_4_0)', 'Google Inc.:ANGLE (NVIDIA GeForce 9800 GT Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (NVIDIA GeForce G100)', 'Google Inc.:ANGLE (NVIDIA GeForce GT 220  Direct3D11 vs_4_1 ps_4_1)', 'Google Inc.:ANGLE (NVIDIA GeForce GT 220 Direct3D9 vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (NVIDIA GeForce GT 220 Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (NVIDIA GeForce GT 240 Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (NVIDIA GeForce GT 430 Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA GeForce GT 430 Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (NVIDIA GeForce GT 430)', 'Google Inc.:ANGLE (NVIDIA GeForce GT 440 Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (NVIDIA GeForce GT 540M Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA GeForce GT 610 Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA GeForce GT 610 Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (NVIDIA GeForce GT 620  Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA GeForce GT 620 Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA GeForce GT 620 Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (NVIDIA GeForce GT 630 Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA GeForce GT 630 Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (NVIDIA GeForce GT 640 Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA GeForce GT 640 Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (NVIDIA GeForce GT 705 Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA GeForce GT 710 Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA GeForce GT 720 Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA GeForce GT 730   Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA GeForce GT 730 Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA GeForce GT 740 Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA GeForce GT 750M Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA GeForce GTS 250 Direct3D11 vs_4_0 ps_4_0)', 'Google Inc.:ANGLE (NVIDIA GeForce GTS 450 Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA GeForce GTX 1050 Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA GeForce GTX 1050 Ti Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA GeForce GTX 1050 Ti with Max-Q Design Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA GeForce GTX 1060 3GB Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA GeForce GTX 1060 6GB Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA GeForce GTX 1060 Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA GeForce GTX 1070 Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA GeForce GTX 1070 Ti Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA GeForce GTX 1080 Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA GeForce GTX 1080 Ti Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA GeForce GTX 260 Direct3D11 vs_4_0 ps_4_0)', 'Google Inc.:ANGLE (NVIDIA GeForce GTX 550 Ti Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA GeForce GTX 550 Ti Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (NVIDIA GeForce GTX 560 Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA GeForce GTX 560 Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (NVIDIA GeForce GTX 560 Ti Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA GeForce GTX 560M Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA GeForce GTX 570 Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA GeForce GTX 580 Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA GeForce GTX 650 Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA GeForce GTX 650 Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (NVIDIA GeForce GTX 650 Ti  Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA GeForce GTX 650 Ti Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA GeForce GTX 660 Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA GeForce GTX 660 Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (NVIDIA GeForce GTX 670 Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA GeForce GTX 745 Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA GeForce GTX 745 Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (NVIDIA GeForce GTX 750 Ti Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA GeForce GTX 760 (192-bit) Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA GeForce GTX 760 Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA GeForce GTX 770 Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA GeForce GTX 780 Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA GeForce GTX 780 Ti Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA GeForce GTX 870M Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA GeForce GTX 950M Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA GeForce GTX 960 Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA GeForce GTX 970 Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA GeForce GTX 970M Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA GeForce GTX 980 Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA GeForce GTX 980 Ti Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA GeForce GTX TITAN Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA NVS 2100M Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (NVIDIA NVS 300 Direct3D11 vs_4_1 ps_4_1)', 'Google Inc.:ANGLE (NVIDIA NVS 310 Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA NVS 3100M  Direct3D11 vs_4_1 ps_4_1)', 'Google Inc.:ANGLE (NVIDIA NVS 315 Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA NVS 4200M Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA NVS 5100M Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (NVIDIA Quadro 1000M  Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA Quadro 2000M Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA Quadro 2000M Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (NVIDIA Quadro K1000M Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA Quadro K2000 Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA Quadro K2000M Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA Quadro K2100M Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA Quadro K3000M Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA Quadro K420 Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA Quadro K420 Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (NVIDIA Quadro K600 Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA Quadro K620 Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA Quadro M1000M Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA Quadro M1200 Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA Quadro M2000  Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA Quadro M2000 Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA Quadro M2000M Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA Quadro M4000M Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA Quadro NVS 140M)', 'Google Inc.:ANGLE (NVIDIA Quadro NVS 160M Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (NVIDIA Quadro NVS 295 Direct3D11 vs_4_0 ps_4_0)', 'Google Inc.:ANGLE (NVIDIA Quadro P4000 Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (NVIDIA Quadro P600 Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (Parallels Display Adapter (WDDM) Direct3D11 vs_4_1 ps_4_1)', 'Google Inc.:ANGLE (Radeon (TM) RX 470 Graphics Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (Radeon (TM) RX 480 Graphics Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (Radeon HD 6470M Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (Radeon RX 580 Series Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (Radeon(TM) RX 460 Graphics Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (RDPDD Chained DD Direct3D9Ex vs_3_0 ps_3_0)', 'Google Inc.:ANGLE (SiS Mirage 3 Graphics Direct3D9Ex vs_2_0 ps_2_0)', 'Google Inc.:ANGLE (Software Adapter Direct3D11 vs_5_0 ps_5_0)', 'Google Inc.:ANGLE (VMware SVGA 3D Direct3D11 vs_4_0 ps_4_0)', 'Google Inc.:ANGLE (VMware SVGA 3D Direct3D9Ex vs_3_0 ps_3_0)'];
const windowsWeights = ['25', '37', '1', '1', '29', '1', '4', '1', '49', '36', '31', '27', '4', '24', '18', '39', '2', '1', '1', '5', '38', '21', '32', '2', '6', '27', '3', '3', '28', '7', '31', '11', '31', '18', '1', '40', '29', '1', '1', '6', '6', '11', '34', '3', '21', '28', '1', '1', '1', '4', '4', '10', '1', '3', '7', '4', '8', '2', '1', '1', '1', '1', '32', '1', '24', '31', '19', '27', '37', '37', '1', '28', '26', '37', '38', '27', '27', '27', '24', '27', '31', '33', '31', '37', '28', '29', '37', '27', '30', '32', '25', '31', '29', '37', '138', '39', '32', '9', '1', '141', '52', '21', '16', '9', '227', '2', '143', '73', '1', '164', '121', '1', '2', '13', '87', '33', '115', '2', '160', '39', '112', '29', '1', '32', '6', '1', '2', '1', '1', '5', '31', '29', '32', '1', '31', '34', '20', '34', '97', '84', '17', '1', '2', '38', '29', '28', '1', '30', '32', '6', '44', '28', '6', '7', '38', '30', '33', '1', '45', '28', '29', '1', '3', '2', '35', '29', '1', '38', '30', '1', '41', '20', '27', '1', '35', '31', '37', '13', '2', '29', '8', '1', '41', '27', '26', '3', '35', '1', '4', '1', '1', '3', '1', '1', '1', '1', '4', '25', '1', '15', '21', '10', '29', '4', '59', '23', '6', '1', '31', '1', '29', '5', '1', '1', '2', '1', '25', '1', '3', '2', '31', '4', '2', '1', '3', '1', '112', '1', '8', '2', '1', '6', '31', '14', '1', '8', '3', '1', '2', '3', '4', '1', '33', '1', '1', '1', '38', '35', '2', '2', '32', '1', '1', '6', '36', '2', '2', '2', '2', '3', '1', '2', '3', '39', '28', '1', '9', '1', '1', '1', '1', '3', '11', '3', '2', '36', '10', '1', '2'];
const osEs = ['Win32', 'Linux x86_64', 'MacIntel'];
const osWeights = [3, 1, 2];

const osChosen = chance.weighted(osEs, osWeights)
const generateUserAgent = new UserAgent({platform: osChosen, pluginsLength: 3,  vendor: "Google Inc."});
const fingerprints = Array(1000).fill().map(() => generateUserAgent());
const fingerprint = fingerprints[Math.floor(Math.random() * fingerprints.length)]

const minWidth = 1024
const minHeight = 1080

const DIMENSION = {
  isLandscape: true,
  width: minWidth > fingerprint.viewportWidth ? minWidth : (parseInt(minWidth + (fingerprint.random(0)
    * (fingerprint.screenWidth - minWidth)), 10)),
  height: minHeight > fingerprint.viewportHeight ? minHeight : (parseInt(minHeight + (fingerprint.random(1)
    * (fingerprint.screenHeight - minHeight)), 10)),
};

const getChromeRuntimeMock = (window) => {
  const installer: any = { install() {} }
  return {
    app: {
      isInstalled: false,
      InstallState: {
        DISABLED: "disabled",
        INSTALLED: "installed",
        NOT_INSTALLED: "not_installed",
      },
      RunningState: {
        CANNOT_RUN: "cannot_run",
        READY_TO_RUN: "ready_to_run",
        RUNNING: "running",
      },
    },
    csi() {},
    loadTimes() {},
    webstore: {
      onInstallStageChanged: {},
      onDownloadProgress: {},
      install(url: any, onSuccess: any, onFailure: any) {
        installer.install(url, onSuccess, onFailure)
      },
    },
    runtime: {
      OnInstalledReason: {
        CHROME_UPDATE: "chrome_update",
        INSTALL: "install",
        SHARED_MODULE_UPDATE: "shared_module_update",
        UPDATE: "update",
      },
      OnRestartRequiredReason: {
        APP_UPDATE: "app_update",
        OS_UPDATE: "os_update",
        PERIODIC: "periodic",
      },
      PlatformArch: {
        ARM: "arm",
        MIPS: "mips",
        MIPS64: "mips64",
        X86_32: "x86-32",
        X86_64: "x86-64",
      },
      PlatformNaclArch: {
        ARM: "arm",
        MIPS: "mips",
        MIPS64: "mips64",
        X86_32: "x86-32",
        X86_64: "x86-64",
      },
      PlatformOs: {
        ANDROID: "android",
        CROS: "cros",
        LINUX: "linux",
        MAC: "mac",
        OPENBSD: "openbsd",
        WIN: "win",
      },
      RequestUpdateCheckStatus: {
        NO_UPDATE: "no_update",
        THROTTLED: "throttled",
        UPDATE_AVAILABLE: "update_available",
      },
      connect: function() {}.bind(function() {}), // eslint-disable-line
      sendMessage: function() {}.bind(function() {}), // eslint-disable-line
    },
  }
}

async function runtimeStealth(page) {
  await page.evaluateOnNewDocument(
    (args) => {
      // Rematerialize serialized functions
      if (args && args.fns) {
        for (const fn of Object.keys(args.fns)) {
          eval(`var ${fn} =  ${args.fns[fn]}`) // eslint-disable-line
        }
      }

      ;(window as any).chrome = getChromeRuntimeMock(window)
    },
    {
      // Serialize functions
      fns: {
        getChromeRuntimeMock: `${getChromeRuntimeMock.toString()}`,
      },
    },
  )
}

async function consoleDebug(page) {
  await page.evaluateOnNewDocument(() => {
    window.console.debug = () => {
      return null
    }
  })
}

async function windowScreen(page) {
  await page.evaluateOnNewDocument(() => {
    // Overwrite the `plugins` property to use a custom getter.
    Object.defineProperty(window.screen, "width", {
      get: () => fingerprint.screenWidth,
    })
    Object.defineProperty(window.screen, "availWidth", {
      get: () => fingerprint.screenWidth,
    })
    Object.defineProperty(window, "innerWidth", {
      get: () => DIMENSION.width,
    })
    Object.defineProperty(window, "outerWidth", {
      get: () => DIMENSION.width,
    })
    Object.defineProperty(window.screen, "height", {
      get: () => fingerprint.screenHeight,
    })
    Object.defineProperty(window.screen, "availHeight", {
      get: () => fingerprint.screenHeight,
    })
    Object.defineProperty(window, "innerHeight", {
      get: () => DIMENSION.height - 74,
    })
    Object.defineProperty(window.navigator, "userAgent", {
      get: () => fingerprint.userAgent,
    })
    Object.defineProperty(window.navigator, "platform", {
      get: () => fingerprint.platform,
    })
    Object.defineProperty(window.navigator, "appName", {
      get: () => fingerprint.appName,
    })
  })
}

async function navigatorLanguages(page) {
  await page.evaluateOnNewDocument(() => {
    // Overwrite the `plugins` property to use a custom getter.
    Object.defineProperty(navigator, "languages", {
      get: () => ["en-US", "en"],
    })
  })
}

async function navigatorPermissions(page) {
  await page.evaluateOnNewDocument(() => {
    const originalQuery = ((window.navigator as any).permissions.query(
      // eslint-disable-next-line
      window.navigator as any,
    ).permissions.__proto__.query = (parameters) =>
      parameters.name === "notifications"
        ? Promise.resolve({ state: Notification.permission }) //eslint-disable-line
        : originalQuery(parameters))

    // Inspired by: https://github.com/ikarienator/phantomjs_hide_and_seek/blob/master/5.spoofFunctionBind.js
    const oldCall = Function.prototype.call
    function call() {
      return oldCall.apply(this, arguments)
    }
    // eslint-disable-next-line
    Function.prototype.call = call

    const nativeToStringFunctionString = Error.toString().replace(/Error/g, "toString")
    const oldToString = Function.prototype.toString

    function functionToString() {
      if (this === window.navigator.permissions.query) {
        return "function query() { [native code] }"
      }
      if (this === functionToString) {
        return nativeToStringFunctionString
      }
      return oldCall.call(oldToString, this)
    }
    // eslint-disable-next-line
    Function.prototype.toString = functionToString
  })
}

async function navigatorPlugin(page) {
  await page.evaluateOnNewDocument(() => {
    function mockPluginsAndMimeTypes() {
      /* global MimeType MimeTypeArray PluginArray */

      // Disguise custom functions as being native
      const makeFnsNative = (fns = []) => {
        const oldCall = Function.prototype.call
        function call() {
          return oldCall.apply(this, arguments)
        }
        // eslint-disable-next-line
        Function.prototype.call = call

        const nativeToStringFunctionString = Error.toString().replace(/Error/g, "toString")
        const oldToString = Function.prototype.toString

        function functionToString() {
          for (const fn of fns) {
            if (this === fn.ref) {
              return `function ${fn.name}() { [native code] }`
            }
          }

          if (this === functionToString) {
            return nativeToStringFunctionString
          }
          return oldCall.call(oldToString, this)
        }
        // eslint-disable-next-line
        Function.prototype.toString = functionToString
      }

      const mockedFns = []

      const fakeData = {
        mimeTypes: [
          {
            type: "application/pdf",
            suffixes: "pdf",
            description: "",
            __pluginName: "Chrome PDF Viewer",
          },
          {
            type: "application/x-google-chrome-pdf",
            suffixes: "pdf",
            description: "Portable Document Format",
            __pluginName: "Chrome PDF Plugin",
          },
          {
            type: "application/x-nacl",
            suffixes: "",
            description: "Native Client Executable",
            enabledPlugin: Plugin,
            __pluginName: "Native Client",
          },
          {
            type: "application/x-pnacl",
            suffixes: "",
            description: "Portable Native Client Executable",
            __pluginName: "Native Client",
          },
        ],
        plugins: [
          {
            name: "Chrome PDF Plugin",
            filename: "internal-pdf-viewer",
            description: "Portable Document Format",
          },
          {
            name: "Chrome PDF Viewer",
            filename: "mhjfbmdgcfjbbpaeojofohoefgiehjai",
            description: "",
          },
          {
            name: "Native Client",
            filename: "internal-nacl-plugin",
            description: "",
          },
        ],
        fns: {
          namedItem: (instanceName) => {
            // Returns the Plugin/MimeType with the specified name.
            const fn = function(name) {
              if (!arguments.length) {
                throw new TypeError(
                  `Failed to execute 'namedItem' on '${instanceName}': 1 argument required, but only 0 present.`,
                )
              }
              return this[name] || null
            }
            mockedFns.push({ ref: fn, name: "namedItem" })
            return fn
          },
          item: (instanceName) => {
            // Returns the Plugin/MimeType at the specified index into the array.
            const fn = function(index) {
              if (!arguments.length) {
                throw new TypeError(
                  `Failed to execute 'namedItem' on '${instanceName}': 1 argument required, but only 0 present.`,
                )
              }
              return this[index] || null
            }
            mockedFns.push({ ref: fn, name: "item" })
            return fn
          },
          refresh: (instanceName) => {
            // Refreshes all plugins on the current page, optionally reloading documents.
            const fn = function() {
              return undefined
            }
            mockedFns.push({ ref: fn, name: "refresh" })
            return fn
          },
        },
      }
      // Poor mans _.pluck
      const getSubset = (keys, obj) => keys.reduce((a, c) => ({ ...a, [c]: obj[c] }), {})

      function generateMimeTypeArray() {
        const arr: any = fakeData.mimeTypes
          .map((obj) => getSubset(["type", "suffixes", "description"], obj))
          .map((obj) => Object.setPrototypeOf(obj, MimeType.prototype))
        arr.forEach((obj) => {
          arr[obj.type] = obj
        })

        // Mock functions
        arr.namedItem = fakeData.fns.namedItem("MimeTypeArray")
        arr.item = fakeData.fns.item("MimeTypeArray")

        return Object.setPrototypeOf(arr, MimeTypeArray.prototype)
      }

      const mimeTypeArray = generateMimeTypeArray()
      Object.defineProperty(navigator, "mimeTypes", {
        get: () => mimeTypeArray,
      })

      function generatePluginArray() {
        const arr: any = fakeData.plugins
          .map((obj) => getSubset(["name", "filename", "description"], obj))
          .map((obj) => {
            const mimes = fakeData.mimeTypes.filter((m) => m.__pluginName === obj.name)
            // Add mimetypes
            mimes.forEach((mime, index) => {
              navigator.mimeTypes[mime.type].enabledPlugin = obj
              obj[mime.type] = navigator.mimeTypes[mime.type]
              obj[index] = navigator.mimeTypes[mime.type]
            })
            obj.length = mimes.length
            return obj
          })
          .map((obj) => {
            // Mock functions
            obj.namedItem = fakeData.fns.namedItem("Plugin")
            obj.item = fakeData.fns.item("Plugin")
            return obj
          })
          .map((obj) => Object.setPrototypeOf(obj, Plugin.prototype))
        arr.forEach((obj) => {
          arr[obj.name] = obj
        })

        // Mock functions
        arr.namedItem = fakeData.fns.namedItem("PluginArray")
        arr.item = fakeData.fns.item("PluginArray")
        arr.refresh = fakeData.fns.refresh("PluginArray")

        return Object.setPrototypeOf(arr, PluginArray.prototype)
      }

      const pluginArray = generatePluginArray()
      Object.defineProperty(navigator, "plugins", {
        get: () => pluginArray,
      })

      // Make mockedFns toString() representation resemble a native function
      makeFnsNative(mockedFns)
    }
    try {
      const isPluginArray = navigator.plugins instanceof PluginArray
      const hasPlugins = isPluginArray && navigator.plugins.length > 0
      if (isPluginArray && hasPlugins) {
        return // nothing to do here
      }
      mockPluginsAndMimeTypes()
    } catch (err) {}
  })
}

async function navigatorWebDriver(page) {
  await page.evaluateOnNewDocument(() => {
    const newProto = (navigator as any).__proto__
    delete newProto.webdriver
    ;(navigator as any).__proto__ = newProto
  })
}

async function webGlVendor(page) {
  await page.evaluateOnNewDocument(() => {
    try {
      // Remove traces of our Proxy ;-)
      var stripErrorStack = (stack) =>
        stack
          .split("\n")
          .filter((line) => !line.includes(`at Object.apply`))
          .filter((line) => !line.includes(`at Object.get`))
          .join("\n")

      const getParameterProxyHandler = {
        get(target, key) {
          // There's a slight difference in toString: Our version does not return a named function by default
          if (key === "toString") {
            const dummyFn = function toString() {
              return target.toString() // `function getParameter() { [native code] }`
            }.bind(Function.prototype.toString) // eslint-disable-line
            return dummyFn
          }
          try {
            return Reflect.get(target, key)
          } catch (err) {
            err.stack = stripErrorStack(err.stack)
            throw err
          }
        },
        apply: function(target, thisArg, args) {
          const param = (args || [])[0]
          // UNMASKED_VENDOR_WEBGL
          if (param === 37445) {
            return "Intel Inc."
          }
          // UNMASKED_RENDERER_WEBGL
          if (param === 37446) {
            return "Intel Iris OpenGL Engine"
          }
          try {
            return Reflect.apply(target, thisArg, args)
          } catch (err) {
            err.stack = stripErrorStack(err.stack)
            throw err
          }
        },
      }

      const proxy = new Proxy(
        WebGLRenderingContext.prototype.getParameter,
        getParameterProxyHandler,
      )
      // To find out the original values here: Object.getOwnPropertyDescriptors(WebGLRenderingContext.prototype.getParameter)
      Object.defineProperty(WebGLRenderingContext.prototype, "getParameter", {
        configurable: true,
        enumerable: false,
        writable: false,
        value: proxy,
      })
    } catch (err) {
      console.warn(err)
    }
  })
}

async function conssoleDebugStealth(page) {
  await page.evaluateOnNewDocument(() => {
    window.console.debug = () => {
      return null
    }
  })
}

async function iframeStealth(page) {
  await page.evaluateOnNewDocument(() => {
    try {
      // Adds a contentWindow proxy to the provided iframe element
      const addContentWindowProxy = (iframe) => {
        const contentWindowProxy = {
          get(target, key) {
            // Now to the interesting part:
            // We actually make this thing behave like a regular iframe window,
            // by intercepting calls to e.g. `.self` and redirect it to the correct thing. :)
            // That makes it possible for these assertions to be correct:
            // iframe.contentWindow.self === window.top // must be false
            if (key === "self") {
              return this
            }
            // iframe.contentWindow.frameElement === iframe // must be true
            if (key === "frameElement") {
              return iframe
            }
            return Reflect.get(target, key)
          },
        }

        if (!iframe.contentWindow) {
          const proxy = new Proxy(window, contentWindowProxy)
          Object.defineProperty(iframe, "contentWindow", {
            get() {
              return proxy
            },
            set(newValue) {
              return newValue // contentWindow is immutable
            },
            enumerable: true,
            configurable: false,
          })
        }
      }

      // Handles iframe element creation, augments `srcdoc` property so we can intercept further
      const handleIframeCreation = (target, thisArg, args) => {
        const iframe = target.apply(thisArg, args)

        // We need to keep the originals around
        const _iframe = iframe
        const _srcdoc = _iframe.srcdoc

        // Add hook for the srcdoc property
        // We need to be very surgical here to not break other iframes by accident
        Object.defineProperty(iframe, "srcdoc", {
          configurable: true, // Important, so we can reset this later
          get: function() {
            return _iframe.srcdoc
          },
          set: function(newValue) {
            addContentWindowProxy(this)
            // Reset property, the hook is only needed once
            Object.defineProperty(iframe, "srcdoc", {
              configurable: false,
              writable: false,
              value: _srcdoc,
            })
            _iframe.srcdoc = newValue
          },
        })
        return iframe
      }

      // Adds a hook to intercept iframe creation events
      const addIframeCreationSniffer = () => {
        /* global document */
        const createElement = {
          // Make toString() native
          get(target, key) {
            return Reflect.get(target, key)
          },
          apply: function(target, thisArg, args) {
            const isIframe = args && args.length && `${args[0]}`.toLowerCase() === "iframe"
            if (!isIframe) {
              // Everything as usual
              return target.apply(thisArg, args)
            } else {
              return handleIframeCreation(target, thisArg, args)
            }
          },
        }
        // All this just due to iframes with srcdoc bug
        document.createElement = new Proxy(document.createElement, createElement)
      }

      // Let's go
      addIframeCreationSniffer()
    } catch (err) {
      // console.warn(err)
    }
  })
}

async function mediaCodecStealth(page) {
  await page.evaluateOnNewDocument(() => {
    try {
      /**
       * Input might look funky, we need to normalize it so e.g. whitespace isn't an issue for our spoofing.
       *
       * @example
       * video/webm; codecs="vp8, vorbis"
       * video/mp4; codecs="avc1.42E01E"
       * audio/x-m4a;
       * audio/ogg; codecs="vorbis"
       * @param {String} arg
       */
      const parseInput = (arg) => {
        const [mime, codecStr] = arg.trim().split(";")
        let codecs = []
        if (codecStr && codecStr.includes('codecs="')) {
          codecs = codecStr
            .trim()
            .replace(`codecs="`, "")
            .replace(`"`, "")
            .trim()
            .split(",")
            .filter((x) => !!x)
            .map((x) => x.trim())
        }
        return { mime, codecStr, codecs }
      }

      /* global HTMLMediaElement */
      const canPlayType = {
        // Make toString() native
        get(target, key) {
          return Reflect.get(target, key)
        },
        // Intercept certain requests
        apply: function(target, ctx, args) {
          if (!args || !args.length) {
            return target.apply(ctx, args)
          }
          const { mime, codecs } = parseInput(args[0])
          // This specific mp4 codec is missing in Chromium
          if (mime === "video/mp4") {
            if (codecs.includes("avc1.42E01E")) {
              return "probably"
            }
          }
          // This mimetype is only supported if no codecs are specified
          if (mime === "audio/x-m4a" && !codecs.length) {
            return "maybe"
          }

          // This mimetype is only supported if no codecs are specified
          if (mime === "audio/aac" && !codecs.length) {
            return "probably"
          }
          // Everything else as usual
          return target.apply(ctx, args)
        },
      }
      HTMLMediaElement.prototype.canPlayType = new Proxy(
        HTMLMediaElement.prototype.canPlayType,
        canPlayType,
      )
    } catch (err) {}
  })
}

export default async function pageStealth(page) {
  await page.setUserAgent(
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36",
  )

  await runtimeStealth(page)
  await consoleDebug(page)
  await navigatorLanguages(page)
  await navigatorPermissions(page)
  await navigatorWebDriver(page)
  await webGlVendor(page)
  await navigatorPlugin(page)
  await conssoleDebugStealth(page)
  await iframeStealth(page)
  await mediaCodecStealth(page)
  await outerWindow(page)
}
