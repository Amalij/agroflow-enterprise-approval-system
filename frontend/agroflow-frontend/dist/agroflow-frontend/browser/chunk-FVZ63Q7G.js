import {
  USER_ROLES
} from "./chunk-AW4U6G7T.js";
import {
  HttpClient
} from "./chunk-FWRROCAB.js";
import {
  Injectable,
  computed,
  delay,
  inject,
  isDevMode,
  of,
  setClassMetadata,
  signal,
  tap,
  ɵɵdefineInjectable
} from "./chunk-N56IC4AV.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-GOMI4DH3.js";

// src/app/features/auth/auth.config.ts
var AUTH_CONFIG = {
  loginEndpoint: "http://localhost:8080/api/auth/login",
  developmentMockEnabled: true,
  developmentMockRole: "Approver"
};

// src/app/features/auth/services/auth.service.ts
var _AuthService = class _AuthService {
  constructor() {
    this.http = inject(HttpClient);
    this.userState = signal(null, ...ngDevMode ? [{ debugName: "userState" }] : []);
    this.developmentSessionKey = "agroflow.auth.development-user.v1";
    this.currentUser = this.userState.asReadonly();
    this.isAuthenticated = computed(() => this.userState() !== null, ...ngDevMode ? [{ debugName: "isAuthenticated" }] : []);
    this.restoreDevelopmentSession();
  }
  signIn(credentials) {
    if (isDevMode() && AUTH_CONFIG.developmentMockEnabled) {
      const session = { user: this.createDevelopmentUser(credentials.email) };
      return of(session).pipe(delay(250), tap((result) => this.acceptSession(result, credentials.rememberMe, true)));
    }
    return this.http.post(AUTH_CONFIG.loginEndpoint, credentials).pipe(tap((session) => this.acceptSession(session, false, false)));
  }
  logout() {
    this.userState.set(null);
    this.getSessionStorage()?.removeItem(this.developmentSessionKey);
  }
  acceptSession(session, rememberMe, developmentMock) {
    this.userState.set(session.user);
    const storage = this.getSessionStorage();
    if (developmentMock && rememberMe && storage) {
      storage.setItem(this.developmentSessionKey, JSON.stringify(session.user));
    } else {
      storage?.removeItem(this.developmentSessionKey);
    }
  }
  restoreDevelopmentSession() {
    if (!isDevMode() || !AUTH_CONFIG.developmentMockEnabled)
      return;
    const storedUser = this.getSessionStorage()?.getItem(this.developmentSessionKey);
    if (!storedUser)
      return;
    try {
      const user = JSON.parse(storedUser);
      if (user.email && user.displayName) {
        const role = USER_ROLES.includes(user.role) ? user.role : AUTH_CONFIG.developmentMockRole;
        this.userState.set(__spreadProps(__spreadValues({}, user), { role }));
      }
    } catch {
      this.getSessionStorage()?.removeItem(this.developmentSessionKey);
    }
  }
  createDevelopmentUser(email) {
    const localPart = email.split("@")[0] ?? email;
    const displayName = localPart.split(/[._-]+/).filter(Boolean).map((part) => `${part.charAt(0).toLocaleUpperCase()}${part.slice(1)}`).join(" ");
    return { email, displayName: displayName || email, role: AUTH_CONFIG.developmentMockRole };
  }
  getSessionStorage() {
    if (typeof window === "undefined")
      return null;
    try {
      return window.sessionStorage;
    } catch {
      return null;
    }
  }
};
_AuthService.\u0275fac = function AuthService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AuthService)();
};
_AuthService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
var AuthService = _AuthService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [], null);
})();

export {
  AUTH_CONFIG,
  AuthService
};
//# sourceMappingURL=chunk-FVZ63Q7G.js.map
