
export default function mainMiddleware(request: any, response: any, next: any) {
  console.log('Passei pelo Middleware ');
  return next();
}