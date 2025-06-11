import ReactThreeTestRenderer from '@react-three/test-renderer'
import { Euler, EulerOrder, Quaternion } from 'three'

describe('object3D', () => {
  it('should work for Euler', async () => {
    const rotation = new Euler(1, 0, 0, 'ZYX')
    await ReactThreeTestRenderer.create(<object3D rotation={rotation} />)
    expect(true).toBeTruthy()
  })

  it('should work for Quaternions', async () => {
    const quaternion = new Quaternion(1, 0, 0, 1)
    await ReactThreeTestRenderer.create(<object3D quaternion={quaternion} />)
    expect(true).toBeTruthy()
  })

  it('should work for [x: number, y: number, z: number] input', async () => {
    await ReactThreeTestRenderer.create(<object3D rotation={[1, 0, 0]} />)
    expect(true).toBeTruthy()
  })

  it('should work for a [x: number, y: number, z: number] object', async () => {
    const rotation: [x: number, y: number, z: number] = [1, 0, 0]
    await ReactThreeTestRenderer.create(<object3D rotation={rotation} />)
    expect(true).toBeTruthy()
  })

  it('should work for [x: number, y: number, z: number, order?: EulerOrder] input', async () => {
    await ReactThreeTestRenderer.create(<object3D rotation={[1, 0, 0, 'ZYX']} />)
    expect(true).toBeTruthy()
  })

  it('should work for a [x: number, y: number, z: number, order: EulerOrder] object', async () => {
    const rotation: [x: number, y: number, z: number, order: EulerOrder] = [1, 0, 0, 'ZYX']
    await ReactThreeTestRenderer.create(<object3D rotation={rotation} />)
    expect(true).toBeTruthy()
  })
})

describe('group', () => {
  it('should work for Euler', async () => {
    const rotation = new Euler(1, 0, 0, 'ZYX')
    await ReactThreeTestRenderer.create(<group rotation={rotation} />)
    expect(true).toBeTruthy()
  })

  it('should work for Quaternions', async () => {
    const quaternion = new Quaternion(1, 0, 0, 1)
    await ReactThreeTestRenderer.create(<group quaternion={quaternion} />)
    expect(true).toBeTruthy()
  })

  it('should work for [x: number, y: number, z: number] input', async () => {
    await ReactThreeTestRenderer.create(<group rotation={[1, 0, 0]} />)
    expect(true).toBeTruthy()
  })

  it('should work for a [x: number, y: number, z: number] object', async () => {
    const rotation: [x: number, y: number, z: number] = [1, 0, 0]
    await ReactThreeTestRenderer.create(<group rotation={rotation} />)
    expect(true).toBeTruthy()
  })

  it('should work for [x: number, y: number, z: number, order?: EulerOrder] input', async () => {
    await ReactThreeTestRenderer.create(<group rotation={[1, 0, 0, 'ZYX']} />)
    expect(true).toBeTruthy()
  })

  it('should work for a [x: number, y: number, z: number, order: EulerOrder] object', async () => {
    const rotation: [x: number, y: number, z: number, order: EulerOrder] = [1, 0, 0, 'ZYX']
    await ReactThreeTestRenderer.create(<group rotation={rotation} />)
    expect(true).toBeTruthy()
  })
})

describe('mesh', () => {
  it('should work for Euler', async () => {
    const rotation = new Euler(1, 0, 0, 'ZYX')
    await ReactThreeTestRenderer.create(<mesh rotation={rotation} />)
    expect(true).toBeTruthy()
  })

  it('should work for Quaternions', async () => {
    const quaternion = new Quaternion(1, 0, 0, 1)
    await ReactThreeTestRenderer.create(<mesh quaternion={quaternion} />)
    expect(true).toBeTruthy()
  })

  it('should work for [x: number, y: number, z: number] input', async () => {
    await ReactThreeTestRenderer.create(<mesh rotation={[1, 0, 0]} />)
    expect(true).toBeTruthy()
  })

  it('should work for a [x: number, y: number, z: number] object', async () => {
    const rotation: [x: number, y: number, z: number] = [1, 0, 0]
    await ReactThreeTestRenderer.create(<mesh rotation={rotation} />)
    expect(true).toBeTruthy()
  })

  it('should work for [x: number, y: number, z: number, order?: EulerOrder] input', async () => {
    await ReactThreeTestRenderer.create(<mesh rotation={[1, 0, 0, 'ZYX']} />)
    expect(true).toBeTruthy()
  })

  it('should work for a [x: number, y: number, z: number, order: EulerOrder] object', async () => {
    const rotation: [x: number, y: number, z: number, order: EulerOrder] = [1, 0, 0, 'ZYX']
    await ReactThreeTestRenderer.create(<mesh rotation={rotation} />)
    expect(true).toBeTruthy()
  })
})
