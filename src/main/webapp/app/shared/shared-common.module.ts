import { NgModule } from '@angular/core';

import { ChartsgraphsSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [ChartsgraphsSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [ChartsgraphsSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class ChartsgraphsSharedCommonModule {}
