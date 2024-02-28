import { handleClick } from "./component.helpers";

describe('Helpers', () => {
    describe('handleClick', () => {
        const windowSpy = jest.spyOn(window, 'open');
        beforeEach(() => {
            jest.clearAllMocks();
            jest.resetAllMocks();
        });
        it('should open a url in new window', () => {
            const url = 'godzillaisthebest.com';
            handleClick(url);
            expect(windowSpy).toHaveBeenCalled();
            expect(windowSpy).toBeCalledWith(url, '_blank')
        })

        it('should open a url in self if email', () => {
            const url = 'mailto:rhodanistheman@godzillaisthebest.com';
            handleClick(url, true);
            expect(windowSpy).toHaveBeenCalled();
            expect(windowSpy).toBeCalledWith(url, '_self')
        })
    })
})