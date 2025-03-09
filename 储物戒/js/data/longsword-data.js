/**
 * 太清阁长剑详细数据
 * 包含一级和二级界面的所有信息
 */
const longSwordData = {
    // 基本信息
    id: "taiqing-longsword",
    name: "太清阁长剑",
    type: "长剑",
    image: "/api/placeholder/64/64",
    quality: "uncommon",
    equippedTaihu: "三号道胎",
    
    // 一级界面信息
    basicInfo: {
        damageMain: "12-15伤害",
        damageDetails: [
            "压强伤害：12-15斩击(70%)，12-15刺击(30%)",
            "灵能伤害：未开启，油脂可依附，灵气可依附"
        ],
        swordFeatures: [
            { name: "剑技适配", value: "基础通用剑技" }
        ],
        taiqingFeatures: [
            { name: "导灵能力", value: "可以附加灵气提升伤害" },
            { name: "均衡设计", value: "不会很快让你感到疲劳" },
            { name: "耐用材质", value: "比普通兵器更耐损耗" },
            { name: "预警功能", value: "危险时会有信号提醒你" }
        ],
        industryFeatures: [
            "铁、木、抗辐射、灵气载体",
            "状态稳定"
        ],
        socialFeatures: [
            "太清阁器宗分支"
        ],
        tags: [
            "五行相性（金、火）", 
            "单手武器", 
            "战斗道具", 
            "工业制品", 
            "身份象征"
        ],
        description: `太清阁出品的标准炼气期修士武器，专为仙师御敌而铸。
        能够通过常规剑技使出不俗的斩击与刺击，但对罡气与坚硬铠甲的效果较差。剑身铭刻引灵纹阵，若引导灵气精准灌注，倍增攻伐之力。
        面对凡境武者如摧枯拉朽，斩杀低阶妖兽亦无需费力，是炼气期修士的得力战具。`
    },
    
    // 二级界面信息
    detailedInfo: {
        // 基本显示信息
        stats: [
            { label: "品质", value: "一阶制式" },
            { label: "耐久度", value: "92/100" },
            { label: "重量", value: "一斤六两" }
        ],
        
        // 战斗方面数据
        combat: {
            damageAttack: [
                { name: "伤害数值", value: "基础物理伤害12-15" },
                { name: "伤害类型", value: "压强型，主要为斩击(70%)，次要为刺击(30%)" },
                { name: "有效距离", value: "100cm" }
            ],
            requirements: [
                { name: "五行相性", value: "金、火相性佳" }
            ],
            features: [
                { name: "灵气导体", value: "剑身可附着灵气" },
                { name: "剑技设计", value: "基本剑技兼容设计，具备符文引导槽" },
                { name: "平衡设计", value: "重心设计在剑身前三分之一处" },
                { name: "耐磨钢材", value: "采用三炼精铁锻造，标准硬度X级" }
            ],
            environment: [
                { name: "剑持有者", value: "三号道胎" },
                { name: "剑身状态", value: "基础状态无涂层，符文槽清晰可见" },
                { name: "剑周环境", value: "默认适配常规灵气环境，温度适应范围-30°C至500°C（若涂抹油脂，则增加伤害，但失去剑周感知）" }
            ]
        },
        
        // 工业方面数据
        industry: {
            basicInfo: [
                { name: "道具状态", value: "固态，常温下稳定" },
                { name: "使用效果", value: "物理切割，灵气引导，基础符文激活" },
                { name: "定义", value: "太清阁标准一阶凡器，单手剑类法器" },
                { name: "材质", value: "铁矿（85%）、灵木（12%）、符文（3%）" },
                { name: "前置工艺", value: "太清阁三炼精铁锻造法" },
                { name: "用途", value: "近身战斗，灵气引导，基础剑法修习" }
            ],
            heatProperties: [
                { name: "导热系数", value: "中等(43 W/m·K)，不会迅速冷热传导" },
                { name: "温度承受", value: "标准使用温度-30°C至500°C" }
            ],
            spiritualProperties: [
                { name: "导灵条件", value: "需通过剑柄符纹激活，消耗使用者0.5点念力/秒" },
                { name: "导灵性能", value: "中等，符合练气期修士使用标准" },
                { name: "灵气反应", value: "稳定，无不良反应" },
                { name: "灵气储存", value: "不具备储存结构，仅作引导通道" },
                { name: "灵气扩散", value: "无泄漏，密封性良好" },
                { name: "五行冲突", value: "在异常五行浓度环境中符文效能降低30%，金属性环境除外(反增强12%)" }
            ],
            durability: [
                { name: "耐腐蚀性", value: "抗普通水源腐蚀，对酸碱灵液防护弱" },
                { name: "耐风化性", value: "可在常规环境下存放20年无明显劣化" },
                { name: "压力承受", value: "100-200MPa内不产生变形" },
                { name: "辐射屏蔽", value: "剑身镀有一层特殊隔离材质，阻挡常见辐射" }
            ],
            crossDimension: [
                { name: "位面通过", value: "X级及以下空间裂缝稳定可控，可安全穿越" },
                { name: "空间折叠", value: "承受轻微空间挤压不破损" },
                { name: "时间流速", value: "适应标准流速±20%范围，超出会产生纹路老化" }
            ]
        },
        
        // 社会学方面数据
        social: {
            standardTracking: [
                { name: "规格", value: "太清阁标准一阶兵器" },
                { name: "工艺", value: "太清阁三炼精铁锻造法" },
                { name: "检验者", value: "太清阁铸剑执事周明" }
            ],
            socialInfluence: [
                { name: "宗门归属", value: "太清阁器宗分支" },
                { name: "门派认同", value: "太清阁弟子佩戴获得内门认可，可借阅基础剑诀典籍" },
                { name: "魔道仇视程度", value: "被视为正道标志之一，魔修见之可能生戒备心" },
                { name: "中立势力态度", value: "被视为基础交易凭证，佩戴可获8%互市折扣" }
            ],
            associatedFactions: [
                { name: "友好十六宗", value: "视为可信任身份象征，允许持剑者进入初级交流区" },
                { name: "剑修联盟", value: "认可为入门装备，可参与季度剑会" },
                { name: "凡间官府", value: "视为修仙者标志，持有者享有一定通行特权" }
            ],
            mundaneDecoration: [
                { name: "世俗印象", value: "在凡人眼中已是神兵利器，持有者会被视为仙师对待" },
                { name: "装饰范围", value: "收藏（修真入门纪念、基地展示）、战斗（竞技、比试）、出行（挂饰、聚会、御剑飞行）" }
            ],
            marketStatus: [
                { name: "市场价格", value: "200-300金币" },
                { name: "量产规模", value: "每年数十柄" },
                { name: "流通范围", value: "所有非敌对势力" },
                { name: "寿命周期", value: "正常使用可达5-8年" }
            ]
        },
        
        // 极端情况数据
        extremeConditions: [
            { name: "金属护甲应对", value: "设计穿透力有限" },
            { name: "幽魂类敌人", value: "无特殊设计，需依靠灵气附着" },
            { name: "剑技设计上限", value: "兼容太清阁基础剑法系列" },
            { name: "紧急用途", value: "可作为基础法器引导工具" },
            { name: "高温极限", value: "500°C开始软化" },
            { name: "腐蚀极限", value: "中性环境稳定，酸碱环境易腐蚀" },
            { name: "辐射极限", value: "X级辐射环境下，剑身符文会在3小时后开始退化" },
            { name: "灵气承载极限", value: "150点，超出可能导致符文损毁" }
        ],
        
        // 安全设计数据
        safetyDesign: {
            autoCleaning: [
                { name: "灵气冲刷", value: "导灵后，微弱灵气自动流动，清理辐射污染" }
            ],
            temperatureWarning: [
                { name: "高温警示", value: "热感应符纹，400°C开始符文发出红色微光提示过热" },
                { name: "冷凝警示", value: "冷感应符文，-25°C时符文发出蓝色微光，提示低温脆化风险" },
                { name: "热暴预警", value: "急剧升温时剑柄微震，提醒使用者注意散热" }
            ],
            spiritualWarning: [
                { name: "灵压感应", value: "灵气浓度超标时剑身符文亮度增强" },
                { name: "异常波动", value: "检测到不稳定气时，符文闪烁不规则" },
                { name: "五行反噬", value: "遇不兼容灵气时剑身轻微震动，警示使用者" }
            ],
            spiritualDispersion: [
                { name: "导灵熔断", value: "检测到长期异常导灵时，自动关闭符文通道" },
                { name: "紧急泄灵", value: "灵气过载时启动剑身排灵槽时，向无害方向排出多余灵气" }
            ],
            conductionShutdown: [
                { name: "持续性导灵", value: "非开关式导灵，使用者停止输送灵气后，立刻关闭导灵" },
                { name: "稳定性导灵", value: "检测到环境大幅度震动或剑身破损时，立刻关闭导灵" },
                { name: "导灵锁定", value: "使用者灵气枯竭时自动锁定符文，防止透支" },
                { name: "紧急切断", value: "剑身受到重击时立即关闭所有符文，防止灵气爆发扩散" }
            ]
        },
        
        // 完整介绍文本
        fullDescription: `太清阁长剑是由太清阁器法堂设计的标准练气期修士入门级法器。全长三尺二寸，重一斤六两，剑身采用三炼精铁经九炼淬火而成，剑柄选用千年灵木包裹。剑身设有基础导灵纹路，可承载灵气进行增幅攻击。
这款长剑是太清阁三百余年来持续改良的经典产品，现为第四代改良版，较初代在灵气传导设计上提升四成。作为标准制式装备，每柄剑都遵循严格的九项质检标准，确保品质统一。
此剑最初设计目的是为初入门的剑修提供一把稳定、耐用且价格适中的法器，既可用于日常修炼，又能在遇险时提供基本防身能力。剑身的符文设计虽然简单，但精准的比例与排布使其能够高效引导灵气，是新手修习基础剑法的理想工具。`
    }
};
