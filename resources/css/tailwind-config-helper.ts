import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../tailwind.config.js'


const fullConfig = resolveConfig(tailwindConfig)

const twConfig = {
    gap     : fullConfig.theme.gap,
    padding : fullConfig.theme.padding
}

export default twConfig