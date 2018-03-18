// tslint:disable-next-line:no-unused-variable
import { CommandGenerator, DeviceId, ICommandWithRaw, SensorCommandIds } from './types';

export default (generator: CommandGenerator) => {
  const encode = generator(DeviceId.sensor);
  return {
    enableCollisionAsync: () => encode({
      commandId: SensorCommandIds.enableCollisionAsync,
    }),

   /**
    * @param  {number} xThreshold An 8-bit settable threshold for the X (left/right)
    * and Y (front/back) axes of Sphero. A value of 00h disables the contribution of that axis.
    * @param  {number} yThreshold An 8-bit settable threshold for the X (left/right)
    * and Y (front/back) axes of Sphero. A value of 00h disables the contribution of that axis.
    * @param  {number} xSpeed An 8-bit settable speed value for the X and Y axes.
    * This setting is ranged by the speed, then added to Xt, Yt to generate the final threshold value.
    * @param  {number} ySpeed An 8-bit settable speed value for the X and Y axes.
    * This setting is ranged by the speed, then added to Xt, Yt to generate the final threshold value.
    * @param  {number} deadTime An 8-bit post-collision dead time to prevent retriggering; specified in 10ms increments.
    * @param  {number=0x01} method Detection method type to use. Currently the only method
    * supported is 01h. Use 00h to completely disable this service.
    */
    configureCollision: (
      xThreshold: number,
      yThreshold: number,
      xSpeed: number,
      ySpeed: number,
      deadTime: number,
      method: number = 0x01) => encode({
      commandId: SensorCommandIds.configureCollision,
      payload: [method, xThreshold, xSpeed, yThreshold, ySpeed, deadTime],
    }),
  };
};