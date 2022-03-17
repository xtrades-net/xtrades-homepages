export function AutoUnsub() {
  return (constructor: any) => {
    const orig = constructor.prototype.ngOnDestroy;
    constructor.prototype.ngOnDestroy = function () {
      for (const prop in this) {
        if (this[prop]) {
          const property = this[prop];
          if (typeof property.subscribe === 'function') {
            property.unsubscribe();
          }
        }
      }
      orig.apply();
    };
  };
}
