import { authReducer, types } from "../../../src/auth";

describe('Pruebas en el authReducer', () => {

    const initialState = {
        logged: false,
    }

    test('debe de retornar el estado por defecto', () => {

        const newState = authReducer( initialState, {} );
        expect( newState ).toEqual( initialState );
    });  

    test('debe de llamar al login y autenticar el usuario', () => {

        const action = {
            type: types.login,
            payload: {
                id: '123',
                name: 'Tito'
            }
        }

        const newState = authReducer( initialState, action );
        expect( newState ).toEqual({
            logged: true,
            user: action.payload
        })
     });

     test('debe de (logout) borrar el name del usuario y logged en false', () => {

        const state = {
            logged: true,
            user: { id: '123', name: 'Maeda' }
        }

        const action = {
            type: types.logout
        }

        const newState = authReducer( state, action );

        expect( newState ).toEqual({ logged: false });

     })
})