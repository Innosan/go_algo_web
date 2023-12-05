// export default defineEventHandler((event) => {
// 	setResponseHeaders(event, {
// 		"Access-Control-Allow-Methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
// 		"Access-Control-Allow-Origin": "*",
// 		"Access-Control-Allow-Credentials": "true",
// 		"Access-Control-Allow-Headers": "*",
// 		"Access-Control-Expose-Headers": "*",
// 	});
// 	if (event.method === "OPTIONS") {
// 		event.node.res.statusCode = 204;
// 		console.log(event.method);
// 		event.node.res.statusMessage = "No Content.";
// 		return "OK";
// 	}
// });
