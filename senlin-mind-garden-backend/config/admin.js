module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '84ea86915d3e1a1c54a7a47608085818'),
  },
});
