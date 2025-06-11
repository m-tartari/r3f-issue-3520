import { Euler, EulerTuple, Quaternion, QuaternionTuple, Vector3, Vector3Tuple } from 'three'
import { create } from '@react-three/test-renderer'

describe('object3D', () => {
  describe('rotation', () => {
    it('should work with an `Euler` object', async () => {
      const rotation = new Euler(1, 0, 0)
      await create(<object3D rotation={rotation} />)
      expect(true).toBeTruthy()
    })

    it('should work with a `.toArray()` call', async () => {
      const rotation = new Euler(1, 0, 0)
      await create(<object3D rotation={rotation.toArray()} />)
      expect(true).toBeTruthy()
    })

    it('should work for an EulerTuple object', async () => {
      const rotation: EulerTuple = [1, 0, 0]
      await create(<object3D rotation={rotation} />)
      expect(true).toBeTruthy()
    })
  })

  describe('quaternion', () => {
    it('should work with an `Quaternion` object', async () => {
      const quaternion = new Quaternion(1, 0, 0, 1)
      await create(<object3D quaternion={quaternion} />)
      expect(true).toBeTruthy()
    })

    it('should work with a `.toArray()` call', async () => {
      const quaternion = new Quaternion(1, 0, 0, 1)
      await create(<object3D quaternion={quaternion.toArray()} />)
      expect(true).toBeTruthy()
    })

    it('should work for an QuaternionTuple object', async () => {
      const quaternion: QuaternionTuple = [1, 0, 0, 1]
      await create(<object3D quaternion={quaternion} />)
      expect(true).toBeTruthy()
    })
  })

  describe('position', () => {
    it('should work with an `Vector3` object', async () => {
      const position = new Vector3(1, 0, 0)
      await create(<object3D position={position} />)
      expect(true).toBeTruthy()
    })

    it('should work with a `.toArray()` call', async () => {
      const position = new Vector3(1, 0, 0)
      await create(<object3D position={position.toArray()} />)
      expect(true).toBeTruthy()
    })

    it('should work for an Vector3Tuple object', async () => {
      const position: Vector3Tuple = [1, 0, 0]
      await create(<object3D position={position} />)
      expect(true).toBeTruthy()
    })
  })

  describe('scale', () => {
    it('should work with an `Vector3` object', async () => {
      const scale = new Vector3(1, 0, 0)
      await create(<object3D scale={scale} />)
      expect(true).toBeTruthy()
    })

    it('should work with a `.toArray()` call', async () => {
      const scale = new Vector3(1, 0, 0)
      await create(<object3D scale={scale.toArray()} />)
      expect(true).toBeTruthy()
    })

    it('should work for an Vector3Tuple object', async () => {
      const scale: Vector3Tuple = [1, 0, 0]
      await create(<object3D scale={scale} />)
      expect(true).toBeTruthy()
    })
  })
})

describe('group', () => {
  describe('rotation', () => {
    it('should work with an `Euler` object', async () => {
      const rotation = new Euler(1, 0, 0)
      await create(<group rotation={rotation} />)
      expect(true).toBeTruthy()
    })

    it('should work with a `.toArray()` call', async () => {
      const rotation = new Euler(1, 0, 0)
      await create(<group rotation={rotation.toArray()} />)
      expect(true).toBeTruthy()
    })

    it('should work for an EulerTuple object', async () => {
      const rotation: EulerTuple = [1, 0, 0]
      await create(<group rotation={rotation} />)
      expect(true).toBeTruthy()
    })
  })

  describe('quaternion', () => {
    it('should work with an `Quaternion` object', async () => {
      const quaternion = new Quaternion(1, 0, 0, 1)
      await create(<group quaternion={quaternion} />)
      expect(true).toBeTruthy()
    })

    it('should work with a `.toArray()` call', async () => {
      const quaternion = new Quaternion(1, 0, 0, 1)
      await create(<group quaternion={quaternion.toArray()} />)
      expect(true).toBeTruthy()
    })

    it('should work for an QuaternionTuple object', async () => {
      const quaternion: QuaternionTuple = [1, 0, 0, 1]
      await create(<group quaternion={quaternion} />)
      expect(true).toBeTruthy()
    })
  })

  describe('position', () => {
    it('should work with an `Vector3` object', async () => {
      const position = new Vector3(1, 0, 0)
      await create(<group position={position} />)
      expect(true).toBeTruthy()
    })

    it('should work with a `.toArray()` call', async () => {
      const position = new Vector3(1, 0, 0)
      await create(<group position={position.toArray()} />)
      expect(true).toBeTruthy()
    })

    it('should work for an Vector3Tuple object', async () => {
      const position: Vector3Tuple = [1, 0, 0]
      await create(<group position={position} />)
      expect(true).toBeTruthy()
    })
  })

  describe('scale', () => {
    it('should work with an `Vector3` object', async () => {
      const scale = new Vector3(1, 0, 0)
      await create(<group scale={scale} />)
      expect(true).toBeTruthy()
    })

    it('should work with a `.toArray()` call', async () => {
      const scale = new Vector3(1, 0, 0)
      await create(<group scale={scale.toArray()} />)
      expect(true).toBeTruthy()
    })

    it('should work for an Vector3Tuple object', async () => {
      const scale: Vector3Tuple = [1, 0, 0]
      await create(<group scale={scale} />)
      expect(true).toBeTruthy()
    })
  })
})

describe('mesh', () => {
  describe('rotation', () => {
    it('should work with an `Euler` object', async () => {
      const rotation = new Euler(1, 0, 0)
      await create(<mesh rotation={rotation} />)
      expect(true).toBeTruthy()
    })

    it('should work with a `.toArray()` call', async () => {
      const rotation = new Euler(1, 0, 0)
      await create(<mesh rotation={rotation.toArray()} />)
      expect(true).toBeTruthy()
    })

    it('should work for an EulerTuple object', async () => {
      const rotation: EulerTuple = [1, 0, 0]
      await create(<mesh rotation={rotation} />)
      expect(true).toBeTruthy()
    })
  })

  describe('quaternion', () => {
    it('should work with an `Quaternion` object', async () => {
      const quaternion = new Quaternion(1, 0, 0, 1)
      await create(<mesh quaternion={quaternion} />)
      expect(true).toBeTruthy()
    })

    it('should work with a `.toArray()` call', async () => {
      const quaternion = new Quaternion(1, 0, 0, 1)
      await create(<mesh quaternion={quaternion.toArray()} />)
      expect(true).toBeTruthy()
    })

    it('should work for an QuaternionTuple object', async () => {
      const quaternion: QuaternionTuple = [1, 0, 0, 1]
      await create(<mesh quaternion={quaternion} />)
      expect(true).toBeTruthy()
    })
  })

  describe('position', () => {
    it('should work with an `Vector3` object', async () => {
      const position = new Vector3(1, 0, 0)
      await create(<mesh position={position} />)
      expect(true).toBeTruthy()
    })

    it('should work with a `.toArray()` call', async () => {
      const position = new Vector3(1, 0, 0)
      await create(<mesh position={position.toArray()} />)
      expect(true).toBeTruthy()
    })

    it('should work for an Vector3Tuple object', async () => {
      const position: Vector3Tuple = [1, 0, 0]
      await create(<mesh position={position} />)
      expect(true).toBeTruthy()
    })
  })

  describe('scale', () => {
    it('should work with an `Vector3` object', async () => {
      const scale = new Vector3(1, 0, 0)
      await create(<mesh scale={scale} />)
      expect(true).toBeTruthy()
    })

    it('should work with a `.toArray()` call', async () => {
      const scale = new Vector3(1, 0, 0)
      await create(<mesh scale={scale.toArray()} />)
      expect(true).toBeTruthy()
    })

    it('should work for an Vector3Tuple object', async () => {
      const scale: Vector3Tuple = [1, 0, 0]
      await create(<mesh scale={scale} />)
      expect(true).toBeTruthy()
    })
  })
})
