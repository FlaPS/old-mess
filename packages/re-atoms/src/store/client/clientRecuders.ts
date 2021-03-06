import * as connection from './parts/connection'
import {reducer as ui} from './parts/ui'
import {reducer as credentialsReducer} from './parts/credentials'
import {reducer as biz} from '@local/biz'
import {isFrontend} from '@local/utils/'
import * as iso from '@local/isomorphic'

export default {
    biz,
    credentials: credentialsReducer,
    connection: connection.reducer,
    publicMeta: iso.reducers.publicMeta,
    frontConfig: () => isFrontend() ? window['frontConfig'] : {env: 'node'},
    ui,
    activation: iso.activation.defaultActivationState,

}