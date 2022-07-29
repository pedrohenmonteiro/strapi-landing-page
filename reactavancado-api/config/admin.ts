export default ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'dc4b371f7ed0f222bcabcb7bca153d14'),
  },
});
