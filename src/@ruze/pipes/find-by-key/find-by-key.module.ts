import { NgModule } from '@angular/core';
import { RuzeFindByKeyPipe } from './find-by-key.pipe';

@NgModule({
    declarations: [
        RuzeFindByKeyPipe
    ],
    exports     : [
        RuzeFindByKeyPipe
    ]
})
export class RuzeFindByKeyPipeModule
{
}
