/*  ----------------------------------
    deviceDriverDisk.ts
    Disk Driver for file system
    ----------------------------------  */

module TSOS {

    export class DeviceDriverDisk extends DeviceDriver {

        constructor() {
            // Override the base method pointers.

            // The code below cannot run because "this" can only be
            // accessed after calling super.
            // super(this.krnKbdDriverEntry, this.krnKbdDispatchKeyPress);
            // So instead...
            super();
            this.driverEntry = this.diskDriverEntry;
        }
        public init(): void {
        
        } 

        public diskDriverEntry() {
            // Initialization routine for this, the kernel-mode Disk Device Driver.
            this.status = "loaded";
            // More?
        }//diskDriverEntry

        public diskFormat(){
            console.log("formattte")
            _DiskFormatStatus = true;

        }//diskFormat

    }//DeviceDriverDisk
}//TSOS