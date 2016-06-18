import Koa from 'koa';
import session from 'koa-session';
import convert from 'koa-convert';
import config from '../config/';
import * as actions from './actions/index';
import { mapUrl } from './utils/mapUrl';

const app = new Koa();

app.keys = ['secretTODO'];
app.use(convert(session({
	maxAge: 60000
},app)));

app.use(async (ctx, next) => {
	const splittedUrlPath = ctx.url.split('?')[0].split('/').slice(1);

	const {action, params} = mapUrl(actions, splittedUrlPath);

	if (action) {
		let result;
		try {
			result = await action(ctx, params);
		} catch(e) {
			if (e && e.redirect) res.redirect(e.redirect);
			else {
				console.error('API ERROR: ', e);
				return ctx.throw(e.status || 500, e);
			}
		}

		// if (result instanceof Function) await result = result(ctx, params); //TODO: needed?

		ctx.body = result; // same as ctx.res.body (alised in koa2)
		next();
	} else {
		ctx.throw(404, 'NOT FOUND');
	}
});

if (config.apiPort) {
	const runnable = app.listen(config.apiPort, (err) => {
		if (err) {
			console.error(err);
		}
		console.info('----\n==> 🌎  API is running on port %s', config.apiPort);
		console.info('==> 💻  Send requests to http://%s:%s', config.apiHost, config.apiPort);
	});
} else {
	console.error('==>     ERROR: No PORT environment variable has been specified');
}
