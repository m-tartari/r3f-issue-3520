# [BUG] React Three Fiber issues 3520

This is a simplified project for pmndrs/react-three-fiber#3520

Updating to R3F v9 breaks applying Three.js class types for position, quaternion, etc. as props

## Set-up

To reproduce the error install dependencies and run the tests:

```shell
npm ci
npm test r3f.test.tsx
```

## Results

The test fails with:

```sh
$ npm test r3f.test.tsx

> r3f-issue-3520@v0.1.0 test
> vitest r3f.test.tsx


 RUN  v3.2.3 /tmp/r3f-issue-3520

stderr | src/r3f.test.tsx
WARNING: Multiple instances of Three.js being imported.

stderr | src/r3f.test.tsx > object3D > should work for Euler
The current testing environment is not configured to support act(...)

stderr | src/r3f.test.tsx > object3D > should work for Quaternions
The current testing environment is not configured to support act(...)

stderr | src/r3f.test.tsx > object3D > should work for [x: number, y: number, z: number] input
The current testing environment is not configured to support act(...)

stderr | src/r3f.test.tsx > object3D > should work for a [x: number, y: number, z: number] object
The current testing environment is not configured to support act(...)

stderr | src/r3f.test.tsx > object3D > should work for [x: number, y: number, z: number, order?: EulerOrder] input
The current testing environment is not configured to support act(...)

stderr | src/r3f.test.tsx > object3D > should work for a [x: number, y: number, z: number, order: EulerOrder] object
The current testing environment is not configured to support act(...)

stderr | src/r3f.test.tsx > group > should work for Euler
The current testing environment is not configured to support act(...)

stderr | src/r3f.test.tsx > group > should work for Quaternions
The current testing environment is not configured to support act(...)

stderr | src/r3f.test.tsx > group > should work for [x: number, y: number, z: number] input
The current testing environment is not configured to support act(...)

stderr | src/r3f.test.tsx > group > should work for a [x: number, y: number, z: number] object
The current testing environment is not configured to support act(...)

stderr | src/r3f.test.tsx > group > should work for [x: number, y: number, z: number, order?: EulerOrder] input
The current testing environment is not configured to support act(...)

stderr | src/r3f.test.tsx > group > should work for a [x: number, y: number, z: number, order: EulerOrder] object
The current testing environment is not configured to support act(...)

stderr | src/r3f.test.tsx > mesh > should work for Euler
The current testing environment is not configured to support act(...)

stderr | src/r3f.test.tsx > mesh > should work for Quaternions
The current testing environment is not configured to support act(...)

stderr | src/r3f.test.tsx > mesh > should work for [x: number, y: number, z: number] input
The current testing environment is not configured to support act(...)

stderr | src/r3f.test.tsx > mesh > should work for a [x: number, y: number, z: number] object
The current testing environment is not configured to support act(...)

stderr | src/r3f.test.tsx > mesh > should work for [x: number, y: number, z: number, order?: EulerOrder] input
The current testing environment is not configured to support act(...)

stderr | src/r3f.test.tsx > mesh > should work for a [x: number, y: number, z: number, order: EulerOrder] object
The current testing environment is not configured to support act(...)

 ❯ src/r3f.test.tsx (18 tests | 6 failed) 61ms
   × object3D > should work for Euler 24ms
     → Cannot assign to read only property 'rotation' of object '#<Object3D>'
   × object3D > should work for Quaternions 3ms
     → Cannot assign to read only property 'quaternion' of object '#<Object3D>'
   ✓ object3D > should work for [x: number, y: number, z: number] input 3ms
   ✓ object3D > should work for a [x: number, y: number, z: number] object 2ms
   ✓ object3D > should work for [x: number, y: number, z: number, order?: EulerOrder] input 2ms
   ✓ object3D > should work for a [x: number, y: number, z: number, order: EulerOrder] object 2ms
   × group > should work for Euler 2ms
     → Cannot assign to read only property 'rotation' of object '#<Group>'
   × group > should work for Quaternions 2ms
     → Cannot assign to read only property 'quaternion' of object '#<Group>'
   ✓ group > should work for [x: number, y: number, z: number] input 2ms
   ✓ group > should work for a [x: number, y: number, z: number] object 2ms
   ✓ group > should work for [x: number, y: number, z: number, order?: EulerOrder] input 2ms
   ✓ group > should work for a [x: number, y: number, z: number, order: EulerOrder] object 1ms
   × mesh > should work for Euler 2ms
     → Cannot assign to read only property 'rotation' of object '#<Mesh>'
   × mesh > should work for Quaternions 2ms
     → Cannot assign to read only property 'quaternion' of object '#<Mesh>'
   ✓ mesh > should work for [x: number, y: number, z: number] input 2ms
   ✓ mesh > should work for a [x: number, y: number, z: number] object 6ms
   ✓ mesh > should work for [x: number, y: number, z: number, order?: EulerOrder] input 2ms
   ✓ mesh > should work for a [x: number, y: number, z: number, order: EulerOrder] object 1ms

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯ Failed Tests 6 ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯

 FAIL  src/r3f.test.tsx > object3D > should work for Euler
TypeError: Cannot assign to read only property 'rotation' of object '#<Object3D>'
 ❯ applyProps node_modules/@react-three/fiber/dist/events-485b18b5.cjs.dev.js:430:17
 ❯ handleContainerEffects node_modules/@react-three/fiber/dist/events-485b18b5.cjs.dev.js:1360:3
 ❯ appendChild node_modules/@react-three/fiber/dist/events-485b18b5.cjs.dev.js:1405:3
 ❯ appendChildToContainer node_modules/@react-three/fiber/dist/events-485b18b5.cjs.dev.js:1578:5
 ❯ insertOrAppendPlacementNodeIntoContainer node_modules/@react-three/fiber/node_modules/react-reconciler/cjs/react-reconciler.development.js:9830:15
 ❯ insertOrAppendPlacementNodeIntoContainer node_modules/@react-three/fiber/node_modules/react-reconciler/cjs/react-reconciler.development.js:9836:11
 ❯ insertOrAppendPlacementNodeIntoContainer node_modules/@react-three/fiber/node_modules/react-reconciler/cjs/react-reconciler.development.js:9836:11
 ❯ commitPlacement node_modules/@react-three/fiber/node_modules/react-reconciler/cjs/react-reconciler.development.js:9900:13
 ❯ runWithFiberInDEV node_modules/@react-three/fiber/node_modules/react-reconciler/cjs/react-reconciler.development.js:522:16
 ❯ commitReconciliationEffects node_modules/@react-three/fiber/node_modules/react-reconciler/cjs/react-reconciler.development.js:10928:11

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/6]⎯

 FAIL  src/r3f.test.tsx > object3D > should work for Quaternions
TypeError: Cannot assign to read only property 'quaternion' of object '#<Object3D>'
 ❯ applyProps node_modules/@react-three/fiber/dist/events-485b18b5.cjs.dev.js:430:17
 ❯ handleContainerEffects node_modules/@react-three/fiber/dist/events-485b18b5.cjs.dev.js:1360:3
 ❯ appendChild node_modules/@react-three/fiber/dist/events-485b18b5.cjs.dev.js:1405:3
 ❯ appendChildToContainer node_modules/@react-three/fiber/dist/events-485b18b5.cjs.dev.js:1578:5
 ❯ insertOrAppendPlacementNodeIntoContainer node_modules/@react-three/fiber/node_modules/react-reconciler/cjs/react-reconciler.development.js:9830:15
 ❯ insertOrAppendPlacementNodeIntoContainer node_modules/@react-three/fiber/node_modules/react-reconciler/cjs/react-reconciler.development.js:9836:11
 ❯ insertOrAppendPlacementNodeIntoContainer node_modules/@react-three/fiber/node_modules/react-reconciler/cjs/react-reconciler.development.js:9836:11
 ❯ commitPlacement node_modules/@react-three/fiber/node_modules/react-reconciler/cjs/react-reconciler.development.js:9900:13
 ❯ runWithFiberInDEV node_modules/@react-three/fiber/node_modules/react-reconciler/cjs/react-reconciler.development.js:522:16
 ❯ commitReconciliationEffects node_modules/@react-three/fiber/node_modules/react-reconciler/cjs/react-reconciler.development.js:10928:11

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[2/6]⎯

 FAIL  src/r3f.test.tsx > group > should work for Euler
TypeError: Cannot assign to read only property 'rotation' of object '#<Group>'
 ❯ applyProps node_modules/@react-three/fiber/dist/events-485b18b5.cjs.dev.js:430:17
 ❯ handleContainerEffects node_modules/@react-three/fiber/dist/events-485b18b5.cjs.dev.js:1360:3
 ❯ appendChild node_modules/@react-three/fiber/dist/events-485b18b5.cjs.dev.js:1405:3
 ❯ appendChildToContainer node_modules/@react-three/fiber/dist/events-485b18b5.cjs.dev.js:1578:5
 ❯ insertOrAppendPlacementNodeIntoContainer node_modules/@react-three/fiber/node_modules/react-reconciler/cjs/react-reconciler.development.js:9830:15
 ❯ insertOrAppendPlacementNodeIntoContainer node_modules/@react-three/fiber/node_modules/react-reconciler/cjs/react-reconciler.development.js:9836:11
 ❯ insertOrAppendPlacementNodeIntoContainer node_modules/@react-three/fiber/node_modules/react-reconciler/cjs/react-reconciler.development.js:9836:11
 ❯ commitPlacement node_modules/@react-three/fiber/node_modules/react-reconciler/cjs/react-reconciler.development.js:9900:13
 ❯ runWithFiberInDEV node_modules/@react-three/fiber/node_modules/react-reconciler/cjs/react-reconciler.development.js:522:16
 ❯ commitReconciliationEffects node_modules/@react-three/fiber/node_modules/react-reconciler/cjs/react-reconciler.development.js:10928:11

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[3/6]⎯

 FAIL  src/r3f.test.tsx > group > should work for Quaternions
TypeError: Cannot assign to read only property 'quaternion' of object '#<Group>'
 ❯ applyProps node_modules/@react-three/fiber/dist/events-485b18b5.cjs.dev.js:430:17
 ❯ handleContainerEffects node_modules/@react-three/fiber/dist/events-485b18b5.cjs.dev.js:1360:3
 ❯ appendChild node_modules/@react-three/fiber/dist/events-485b18b5.cjs.dev.js:1405:3
 ❯ appendChildToContainer node_modules/@react-three/fiber/dist/events-485b18b5.cjs.dev.js:1578:5
 ❯ insertOrAppendPlacementNodeIntoContainer node_modules/@react-three/fiber/node_modules/react-reconciler/cjs/react-reconciler.development.js:9830:15
 ❯ insertOrAppendPlacementNodeIntoContainer node_modules/@react-three/fiber/node_modules/react-reconciler/cjs/react-reconciler.development.js:9836:11
 ❯ insertOrAppendPlacementNodeIntoContainer node_modules/@react-three/fiber/node_modules/react-reconciler/cjs/react-reconciler.development.js:9836:11
 ❯ commitPlacement node_modules/@react-three/fiber/node_modules/react-reconciler/cjs/react-reconciler.development.js:9900:13
 ❯ runWithFiberInDEV node_modules/@react-three/fiber/node_modules/react-reconciler/cjs/react-reconciler.development.js:522:16
 ❯ commitReconciliationEffects node_modules/@react-three/fiber/node_modules/react-reconciler/cjs/react-reconciler.development.js:10928:11

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[4/6]⎯

 FAIL  src/r3f.test.tsx > mesh > should work for Euler
TypeError: Cannot assign to read only property 'rotation' of object '#<Mesh>'
 ❯ applyProps node_modules/@react-three/fiber/dist/events-485b18b5.cjs.dev.js:430:17
 ❯ handleContainerEffects node_modules/@react-three/fiber/dist/events-485b18b5.cjs.dev.js:1360:3
 ❯ appendChild node_modules/@react-three/fiber/dist/events-485b18b5.cjs.dev.js:1405:3
 ❯ appendChildToContainer node_modules/@react-three/fiber/dist/events-485b18b5.cjs.dev.js:1578:5
 ❯ insertOrAppendPlacementNodeIntoContainer node_modules/@react-three/fiber/node_modules/react-reconciler/cjs/react-reconciler.development.js:9830:15
 ❯ insertOrAppendPlacementNodeIntoContainer node_modules/@react-three/fiber/node_modules/react-reconciler/cjs/react-reconciler.development.js:9836:11
 ❯ insertOrAppendPlacementNodeIntoContainer node_modules/@react-three/fiber/node_modules/react-reconciler/cjs/react-reconciler.development.js:9836:11
 ❯ commitPlacement node_modules/@react-three/fiber/node_modules/react-reconciler/cjs/react-reconciler.development.js:9900:13
 ❯ runWithFiberInDEV node_modules/@react-three/fiber/node_modules/react-reconciler/cjs/react-reconciler.development.js:522:16
 ❯ commitReconciliationEffects node_modules/@react-three/fiber/node_modules/react-reconciler/cjs/react-reconciler.development.js:10928:11

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[5/6]⎯

 FAIL  src/r3f.test.tsx > mesh > should work for Quaternions
TypeError: Cannot assign to read only property 'quaternion' of object '#<Mesh>'
 ❯ applyProps node_modules/@react-three/fiber/dist/events-485b18b5.cjs.dev.js:430:17
 ❯ handleContainerEffects node_modules/@react-three/fiber/dist/events-485b18b5.cjs.dev.js:1360:3
 ❯ appendChild node_modules/@react-three/fiber/dist/events-485b18b5.cjs.dev.js:1405:3
 ❯ appendChildToContainer node_modules/@react-three/fiber/dist/events-485b18b5.cjs.dev.js:1578:5
 ❯ insertOrAppendPlacementNodeIntoContainer node_modules/@react-three/fiber/node_modules/react-reconciler/cjs/react-reconciler.development.js:9830:15
 ❯ insertOrAppendPlacementNodeIntoContainer node_modules/@react-three/fiber/node_modules/react-reconciler/cjs/react-reconciler.development.js:9836:11
 ❯ insertOrAppendPlacementNodeIntoContainer node_modules/@react-three/fiber/node_modules/react-reconciler/cjs/react-reconciler.development.js:9836:11
 ❯ commitPlacement node_modules/@react-three/fiber/node_modules/react-reconciler/cjs/react-reconciler.development.js:9900:13
 ❯ runWithFiberInDEV node_modules/@react-three/fiber/node_modules/react-reconciler/cjs/react-reconciler.development.js:522:16
 ❯ commitReconciliationEffects node_modules/@react-three/fiber/node_modules/react-reconciler/cjs/react-reconciler.development.js:10928:11

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[6/6]⎯


 Test Files  1 failed (1)
      Tests  6 failed | 12 passed (18)
   Start at  11:37:05
   Duration  735ms (transform 52ms, setup 45ms, collect 99ms, tests 61ms, environment 253ms, prepare 92ms)
```
