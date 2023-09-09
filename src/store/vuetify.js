export const state = () => ({
    isMobile: false,
    breakpoint: ''
})

export const getters = {}

export const mutations = {
    SET_IS_MOBILE(state, data){
        state.isMobile = data
    },
    SET_BREAKPOINT(state, data){
        state.breakpoint = data
    }
}

export const actions = {}