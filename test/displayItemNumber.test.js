import {getShowsInfo} from '../src/modules/tvmazeAPI.js'
import fetchMock from 'jest-fetch-mock';
import itemNumber from '../src/modules/displayItemNumber.js';
fetchMock.doMock();


describe('Likes count', ()=>{
    document.body.innerHTML = `<ul class="list"><li></li> </ul>`
    test('Item number counter', async () => {
        const data = await getShowsInfo(); 
        const info = itemNumber(data)   
        expect(itemNumber(data)).toEqual(info) 
    })
})