// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import { rest } from 'msw'
import { setupServer } from 'msw/node'

const server = setupServer(
    rest.get(process.env.REACT_APP_API_URL + '/api/sites', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json([
                {
                    username: 'admin',
                    id: 22,
                    name: 'TestSite2',
                    geolocation: 'geo2',
                    altitude: 222,
                    seismic_zone: 2222,
                },
                {
                    username: 'admin1',
                    id: 33,
                    name: 'TestSite3',
                    geolocation: 'geo3',
                    altitude: 333,
                    seismic_zone: 333,
                },
            ])
        )
    }),

    rest.get(process.env.REACT_APP_API_URL + '/api/sites/*', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                username: 'admin',
                id: 22,
                name: 'TestSite2',
                geolocation: 'geo2',
                altitude: 222,
                seismic_zone: 2222,
            })
        )
    })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())
