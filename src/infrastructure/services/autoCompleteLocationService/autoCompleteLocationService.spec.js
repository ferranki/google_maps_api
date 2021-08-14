import AutocompleteLocationService from "./autoCompleteLocationService";
import sinon from "sinon";
const sandbox = sinon.createSandbox();


describe('AutocompleteLocationService', () => {


    describe('getPlacePredictions', () => {

        const predictionsResult = [
            {
                description: "description",
                placeId: "palceId"
            }
        ];

        const autocompleteServiceMock = {
            getPlacePredictions: sandbox.stub().returns({ predictions: predictionsResult }, "getPlacePredictions")
        }
        const autoCompleteLocationService = new AutocompleteLocationService(autocompleteServiceMock);


        it('Should return empty array when input is empty', async () => {
            const result = await autoCompleteLocationService.getPlacePredictions("");
            expect(result).toEqual([]);
        });

        it('Should return empty array when input is null', async () => {
            const result = await autoCompleteLocationService.getPlacePredictions();
            expect(result).toEqual([]);
        });

        it('Should return array of predictions when input is not in cache yet', async () => {
            const result = await autoCompleteLocationService.getPlacePredictions("barcelona");
            expect(result).toEqual(predictionsResult);
        });

        it('Should return array of predictions when input is in cache ', async () => {

            const autocompleteServiceMock = {
                getPlacePredictions: () => {}
            }

            const autoCompleteLocationService = new AutocompleteLocationService(autocompleteServiceMock);
            const spy = sinon.spy(autocompleteServiceMock, "getPlacePredictions");

            const result = await autoCompleteLocationService.getPlacePredictions("barcelona");

            console.log(result)

            expect(result).toEqual(predictionsResult);
            sinon.assert.notCalled(spy);
        });

    });

});