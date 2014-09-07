/**
 * Created by wangchangxin on 14-9-4.
 */


//eg. http://p.3.cn/prices/mgets?skuIds=J_100012&area=&type=1

define(['jquery','underscore'], function ($, _) {

    return {
        mget: function (_skuList, _callback) {

            var paramSku = _.map(_skuList, function(_sku){ return 'J_' + _sku });

            $.ajax({
                url: 'http://p.3.cn/prices/mgets?type=1',
                data: {skuIds: paramSku.join(',')},
                dataType:'jsonp',
                success: function (_data) {

                    _.each(_data, function (_item) {
                        _item['sku'] = _item.id.slice(2);
                    });


                    !!_callback && _callback(_data);

                }
            });

        }

    }
});