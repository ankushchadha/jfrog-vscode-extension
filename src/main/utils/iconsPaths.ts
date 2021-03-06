import * as path from 'path';

export class IconsPaths {
    static readonly RESOURCES_PATH: string = path.join(__filename, '..', '..', '..', '..', 'resources');

    // Severities
    static readonly NORMAL_SEVERITY: string = IconsPaths.getIconPath('normal');
    static readonly PENDING_SEVERITY: string = IconsPaths.getIconPath('unknown');
    static readonly UNKNOWN_SEVERITY: string = IconsPaths.getIconPath('unknown');
    static readonly INFORMATION_SEVERITY: string = IconsPaths.getIconPath('low');
    static readonly LOW_SEVERITY: string = IconsPaths.getIconPath('low');
    static readonly MEDIUM_SEVERITY: string = IconsPaths.getIconPath('medium');
    static readonly HIGH_SEVERITY: string = IconsPaths.getIconPath('high');

    private static getIconPath(iconName: string) {
        return path.join(IconsPaths.RESOURCES_PATH, iconName + '.png');
    }
}
