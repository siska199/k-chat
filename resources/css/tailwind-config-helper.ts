import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../tailwind.config.js'
import { deepCopy } from '../js/lib/utils';


const fullConfig = resolveConfig(tailwindConfig)

const twConfig = {
    gap     : deepCopy(fullConfig.theme.spacing),
    padding : deepCopy(fullConfig.theme.spacing),
}


Object.entries(fullConfig.theme.spacing)?.map(([key,value])=>{
    const keyUpdate = key as keyof typeof fullConfig.theme.spacing 
    twConfig.gap[keyUpdate] = `gap-${key}`
    twConfig.padding[keyUpdate] = `p-${key}`
})




console.log('twConfig: ', twConfig)
export default twConfig