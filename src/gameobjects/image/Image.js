/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

/**
* An Image is a light-weight object you can use to display anything that doesn't need physics or animation.
* It can still rotate, scale, crop and receive input events. This makes it perfect for logos, backgrounds, simple buttons and other non-Sprite graphics.
*
* @class Phaser.GameObject.Image
* @extends Phaser.Components.BaseTransform
* @constructor
* @param {Phaser.Game} game - A reference to the currently running game.
* @param {number} [x=0] - The x coordinate of the Image. The coordinate is relative to any parent container this Image may be in.
* @param {number} [y=0] - The y coordinate of the Image. The coordinate is relative to any parent container this Image may be in.
* @param {string} [key] - The texture used by the Image during rendering. It can be a string which is a reference to the Cache entry, or an instance of a RenderTexture, BitmapData or PIXI.Texture.
* @param {string|number} [frame] - If this Image is using part of a sprite sheet or texture atlas you can specify the exact frame to use by giving a string or numeric index.
*/
Phaser.GameObject.Image = function (game, x, y, key, frame)
{
    Phaser.Component.BaseTransform.call(this, x, y);

    this.game = game;

    /**
    * @property {number} type - The const type of this object.
    * @readonly
    */
    this.type = Phaser.IMAGE;

    this.parent = null;

    this.texture = game.textures.get(key);

    this.frame = this.texture.get(frame);

    //  Allows you to turn off a GO from rendering, but still render its children
    this.skipRender = (key === undefined);

    this.visible = true;

    this.data = new Phaser.Component.Data(this);

    //  Temporary for now?
    this.alpha = 1;
    this.blendMode = Phaser.blendModes.NORMAL;
    this.scaleMode = Phaser.scaleModes.DEFAULT;
    this.exists = true;
};

Phaser.GameObject.Image.prototype = Object.create(Phaser.Component.BaseTransform.prototype);
Phaser.GameObject.Image.prototype.constructor = Phaser.GameObject.Image;

/**
* Automatically called by World.preUpdate.
*
* @method Phaser.Image#preUpdate
* @memberof Phaser.Image
*/
Phaser.GameObject.Image.prototype.preUpdate = function ()
{
    // this.transform.update();
};

Phaser.GameObject.Image.prototype.update = function ()
{
};

Phaser.GameObject.Image.prototype.postUpdate = function ()
{
};

Object.defineProperties(Phaser.GameObject.Image.prototype, {

    width: {

        enumerable: true,

        get: function ()
        {
            return this.transform._scaleX * this.frame.realWidth;
        },

        set: function (value)
        {
            this.scaleX = value / this.frame.realWidth;
        }

    },

    height: {

        enumerable: true,

        get: function ()
        {
            return this.transform._scaleY * this.frame.realHeight;
        },

        set: function (value)
        {
            this.scaleY = value / this.frame.realHeight;
        }

    }

});
