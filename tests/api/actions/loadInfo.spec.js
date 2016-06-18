import loadInfo from '../../../api/actions/loadInfo';
import timekeeper from 'timekeeper';

describe('(API)', () => {
	describe('(Actions)', () => {
		describe('loadInfo', () => {
			it('loads the current date', () => {
				const now = Date.now();
				timekeeper.freeze(now);

				return loadInfo().then(data => {
					expect(data).to.deep.equal({
						time: now,
						message: 'This came from the api server'
					});
				});
			});
		});
	});
});
