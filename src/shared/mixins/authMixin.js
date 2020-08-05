import PasswordField from '@/components/PasswordField';
import { mapState } from 'vuex';

export const authMixin = {
  components: {
    'password-field': PasswordField
  },
  computed: {
    ...mapState(['auth']),
    errorMessage() {
      return this.auth.error.message;
    }
  },
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    updatePassword(newPassword) {
      this.password = newPassword;
    }
  }
};
