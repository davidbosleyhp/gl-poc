import React from 'react'
import index from './index'

describe('Test index.tsx', () => {
    it('Should render app without crashing', () => {
        expect(
            JSON.stringify(Object.assign({}, index, { _reactInternalInstance: 'censored' }))
        ).toMatchSnapshot()
    })
})
