// import pack from '../../package.json'
// import * as _components from './src'
// export * from './src'

// const install = <T extends { component: (...rest: any) => void }>(app: T) => {
//      const components = _components as any
//     for(const key in components){
//         app.component(components[key].name,components[key])
//     }
// }

// export default {
//     name: pack.name,
//     version: pack.version,
//     install
// }

import MiddleButton from './src/button';

export {
    MiddleButton
}
