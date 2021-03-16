export function SET_TOKEN(state, tokenValue) {
    state.token = tokenValue;
    console.log(state.token);
}

export function SET_USER_INFOS(state, userInfos) {
    state.userInfos = userInfos;
    console.log(state.userInfos);
}
