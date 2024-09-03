import {
    AbstractSkillViewController,
    ViewControllerOptions,
    SkillView,
    CardViewController,
} from '@sprucelabs/heartwood-view-controllers'

export default class RootSkillViewController extends AbstractSkillViewController {
    public static id = 'root'
    protected cardVc: CardViewController

    public constructor(options: ViewControllerOptions) {
        super(options)
        this.cardVc = this.CardVc()
    }

    private CardVc(): CardViewController {
        return this.Controller('card', {
            header: {
                image: 'https://s3.amazonaws.com/storybook.sprucelabs.ai/card-header-1.png',
            },
            body: {
                sections: [
                    {
                        buttons: [
                            {
                                id: 'values',
                                label: 'Family Values',
                                lineIcon: 'users',
                            },
                            {
                                id: 'members',
                                label: 'Family Members',
                            },
                            {
                                id: 'feedback',
                                label: 'Feedback',
                            },
                            {
                                id: 'write',
                                label: 'Write',
                                type: 'primary',
                            },
                        ],
                    },
                ],
            },
        })
    }

    public async getIsLoginRequired() {
        return true
    }

    public render(): SkillView {
        return {
            layouts: [
                {
                    cards: [this.cardVc.render()],
                },
            ],
        }
    }
}
